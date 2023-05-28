import { useState, useCallback } from "react";

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [process, setProcess] = useState("waiting");

	const request = useCallback(
		async (
			url,
			method = "GET",
			body = null,
			headers = {
				"X-RapidAPI-Key": "b6e5837d92msh83a15ae33a9129bp1efb52jsn4cccb7ff76fd",
				"X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
			}
		) => {
			setLoading(true);
			setProcess("loading");
			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();

				setLoading(false);
				return data;
			} catch (e) {
				setLoading(false);
				setError(e.message);
				setProcess("error");
				throw e;
			}
		},
		[]
	);

	const clearError = useCallback(() => {
		setError(null);
		setProcess("loading");
	}, []);

	return { loading, request, error, clearError, process, setProcess };
};

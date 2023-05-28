import { useHttp } from "../hooks/http.hook";

const useFitnessService = () => {
	const { loading, request, error, clearError, process, setProcess } =
		useHttp();

	const _apiBase = "https://fitness-calculator.p.rapidapi.com/dailycalorie";
	const _apiKey = "b6e5837d92msh83a15ae33a9129bp1efb52jsn4cccb7ff76fd";

	const url =
		"https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "b6e5837d92msh83a15ae33a9129bp1efb52jsn4cccb7ff76fd",
			"X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
		},
	};
	const getSingleParams = async (age, gender, height, weight, activity) => {
		const res = await request(
			`${_apiBase}?gender=${gender}` + `&height=${height}`
		);
		return res.data;
	};
	return { loading, error, process, setProcess, getSingleParams };
};

export default useFitnessService;

import React, { useEffect, useRef } from "react";
import "./link.scss";
import inst from "../img/inst.svg";
import tg from "../img/tg.svg";
import socialMe from "../img/socialme.svg";

const Link = () => {
	const iconHeaderRef = useRef(null);

	useEffect(() => {
		if (iconHeaderRef.current) {
			iconHeaderRef.current.classList.add("fade-in");
		}
	}, []);

	return (
		<div className="icon-header-container" ref={iconHeaderRef}>
			<h2>Зв'язок зі мною</h2>
			<div className="icon-container">
				<a
					href="https://instagram.com/nikitkaaa33?igshid=NTc4MTIwNjQ2YQ=="
					className="icon-wrapper slide-left"
				>
					<img src={inst} alt="Иконка 1" />
					<p>Instagram</p>
				</a>
				<a href="https://t.me/nikitkaaa33" className="icon-wrapper slide-top">
					<img src={tg} alt="Иконка 2" />
					<p>Telegram</p>
				</a>
				<a
					href="https://atletiko.club/page/grig_5a.html#lg=2&slide=5"
					className="icon-wrapper slide-right"
				>
					<img src={socialMe} alt="Иконка 3" />
					<p>АтлетіКо</p>
				</a>
			</div>
		</div>
	);
};

export default Link;

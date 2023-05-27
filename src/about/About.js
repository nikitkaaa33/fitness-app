import "./about.scss";

import React, { useEffect, useState } from "react";
import "./about.scss";
import me from "../img/me.jpg";
import Accordion from "react-bootstrap/Accordion";

const MyComponent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleDown, setIsVisibleDown] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	useEffect(() => {
		setIsVisibleDown(true);
	}, []);

	return (
		<div className="wrapper">
			<div className="container">
				<img
					className={`image ${isVisible ? "slide-in-left" : ""}`}
					src={me}
					alt="description"
				/>
				<div className={`text ${isVisible ? "slide-in-right" : ""}`}>
					<h1>Привіт! Дякую , що завітав на мій сайт. Будемо знайомитись</h1>
					<p>
						Мене звати Микита , я допоміг вже сотням людей, і ти не будеш
						виключенням!
					</p>
				</div>
			</div>
			<div className={`my-element ${isVisible ? "slide-up" : ""} accordion`}>
				<Accordion flush>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Як саме проходять тренування?</Accordion.Header>
						<Accordion.Body>
							Тренування проходять під моїм супроводом <a href="#">у залі</a>{" "}
							або онлайн, силові/фітнесс/функціональні - в залежності від ваших
							цілей
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Скільки часу триває тренування?</Accordion.Header>
						<Accordion.Body>
							У середньому від 45 хвилин до 70 хвилин
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Яка вартість тренувань?</Accordion.Header>
						<Accordion.Body>
							Про це можна подивитися <a href="/price">тут</a>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

export default MyComponent;

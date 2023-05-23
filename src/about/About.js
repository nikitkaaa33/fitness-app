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
					<h1>Всім привіт. Мене звати Микита!</h1>
					<p>Я тренер з багаторічним досвідом бла бла бла</p>
				</div>
			</div>
			<div className={`my-element ${isVisible ? "slide-up" : ""} accordion`}>
				<Accordion flush>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Питання 1</Accordion.Header>
						<Accordion.Body>Відповідь на питання Ваше 1</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Питання 2</Accordion.Header>
						<Accordion.Body>Відповідь на питання Ваше 2</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Питання 3</Accordion.Header>
						<Accordion.Body>Відповідь на питання Ваше 3</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

export default MyComponent;

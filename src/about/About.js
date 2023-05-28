import "./about.scss";
import Carousel from "react-bootstrap/Carousel";

import React, { useEffect, useState } from "react";
import "./about.scss";
import me from "../img/me.jpg";
import aboutFood from "../img/aboutFood.svg";
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
					<h1>Привіт! Ласкаво прошу на мій сайт!</h1>
					<p>
						Мене звати Микита , тренер, який допоміг вже сотням людей, і ти не
						будеш виключенням!
					</p>
				</div>
			</div>
			<p className="feature_p">Що я можу запропонувати?</p>
			<section className={"features "}>
				<div className="feature">
					<img src={aboutFood} alt="Функція 1" />
					<h3>Індивідуальні тренування</h3>
					<p>
						Я розроблю індивідуальну програму тренувань, яка відповідає вашим
						цілям та потребам.
					</p>
				</div>

				<div className="feature">
					<img src={aboutFood} alt="" />
					<h3>Різноманітні програми</h3>
					<p>
						Я пропоную широкий спектр тренувань, включаючи силові, кардіо,
						функціональні та інші.
					</p>
				</div>

				<div className="feature">
					<img src={aboutFood} alt="Функція 2" />
					<h3>Налаштування режиму харчування</h3>
					<p>
						Допоможу клієнту розробити здорову і збалансовану дієту, підібрати
						правильне співвідношення білків, вуглеводів і жирів, а також
						запропонувати рекомендації щодо харчування.
					</p>
				</div>
			</section>
			<p className="FAQ">FAQ</p>
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
					<div className="accordion_last">
						<Accordion.Item eventKey="2">
							<Accordion.Header>Яка вартість тренувань?</Accordion.Header>
							<Accordion.Body>
								Про це можна подивитися <a href="/price">тут</a>
							</Accordion.Body>
						</Accordion.Item>
					</div>
				</Accordion>
			</div>
		</div>
	);
};

export default MyComponent;

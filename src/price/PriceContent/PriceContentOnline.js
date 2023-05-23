import React, { useEffect, useState } from "react";
import "./priceContent.scss";
import food from "../../img/food.svg";
import sport from "../../img/sport.svg";
import vitamins from "../../img/vitamins.svg";

const PricingComponentOn = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const pricingOptions = [
		{ id: 1, text: "Контроль за КБЖУ", imageUrl: food },
		{
			id: 2,
			text: "Заняття проводимо в онлайн засобах звязку",
			imageUrl: sport,
		},
		{ id: 3, text: "Консультація з БАДів", imageUrl: vitamins },
	];

	return (
		<div className="pricing-container">
			{pricingOptions.map((option, index) => (
				<div
					key={option.id}
					className={`pricing-option ${
						isVisible
							? index % 2 === 0
								? "slide-in-left"
								: "slide-in-right"
							: ""
					}`}
				>
					<img src={option.imageUrl} alt={option.text} />
					<p>{option.text}</p>
				</div>
			))}
			<div className="price">
				1 тренування - 300
				<br /> 4 тренувань - 1100
				<br /> 6 тренувань - 1500
				<br /> 10 тренувань - 2200
			</div>
		</div>
	);
};

export default PricingComponentOn;

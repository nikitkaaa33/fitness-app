import React, { useEffect, useState } from "react";
import "./priceContent.scss";
import food from "../../img/food.svg";
import sport from "../../img/sport.svg";
import vitamins from "../../img/vitamins.svg";

const PricingComponent = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const pricingOptions = [
		{ id: 1, text: "Підбір індивідуального харчування", imageUrl: food },
		{ id: 2, text: "Налагоджена система тренувань", imageUrl: sport },
		{ id: 3, text: "Консультація з БАДів та інших питань", imageUrl: vitamins },
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
				<br />
				(для уточнення цін - пишіть в особисті)
			</div>
		</div>
	);
};

export default PricingComponent;

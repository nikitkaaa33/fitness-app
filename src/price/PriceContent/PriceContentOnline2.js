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
		{ id: 1, text: "Пристосування харчування під ваші цілі", imageUrl: food },
		{
			id: 2,
			text: "Розробляемо план тренувань під ваші особливості та цілі",
			imageUrl: sport,
		},
		{ id: 3, text: "Повна підтримка онлайн 24/7", imageUrl: vitamins },
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
				1 місяць - 1600 (для уточнення цін - пишіть в особисті)
			</div>
		</div>
	);
};

export default PricingComponentOn;

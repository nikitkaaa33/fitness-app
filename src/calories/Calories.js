import React, { useState } from "react";
import "./calories.scss";

const Calories = () => {
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmr, setBMR] = useState("");

	const calculateBMR = () => {
		if (age && gender && weight && height) {
			let bmrCalculation = 0;

			if (gender === "male") {
				bmrCalculation = 10 * weight + 6.25 * height - 5 * age + 5;
			} else if (gender === "female") {
				bmrCalculation = 10 * weight + 6.25 * height - 5 * age - 161;
			}

			setBMR(bmrCalculation.toFixed(2));
		}
	};

	return (
		<div className="bmr-calculator">
			<h2>Калькулятор базового обміну речовин (BMR)</h2>
			<div className="input-container">
				<label>
					Вік (в роках):
					<input
						type="number"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>
				</label>
			</div>
			<div className="input-container">
				<label>
					Вага (у кг) :
					<input
						type="number"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
					/>
				</label>
			</div>
			<div className="input-container">
				<label>
					Зріст (у см):
					<input
						type="number"
						value={height}
						onChange={(e) => setHeight(e.target.value)}
					/>
				</label>
			</div>
			<div className="input-container">
				<label>
					Стать:
					<select value={gender} onChange={(e) => setGender(e.target.value)}>
						<option value="">Оберіть стать</option>
						<option value="male">Чоловік</option>
						<option value="female">Жінка</option>
					</select>
				</label>
			</div>
			<button onClick={calculateBMR}>Розрахувати</button>
			{bmr && <p className="result">Ваш базовий обмін (BMR): {bmr} ккал</p>}
		</div>
	);
};

export default Calories;

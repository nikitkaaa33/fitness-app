import useFitnessService from "../services/FitnessService";
import { useEffect, useState } from "react";
import "./weight.scss";

const Weight = () => {
	const [height, setHeight] = useState("");
	const [age, setAge] = useState("");
	const [gender, setGender] = useState("");
	const [idealWeight, setIdealWeight] = useState("");

	const calculateIdealWeight = () => {
		if (height && age && gender) {
			let idealWeightCalculation = 0;

			if (gender === "male") {
				idealWeightCalculation = (height - 100 + age / 10) * 0.9;
			} else if (gender === "female") {
				idealWeightCalculation = (height - 100 + age / 10) * 0.85;
			}

			setIdealWeight(idealWeightCalculation.toFixed(2));
		}
	};

	return (
		<div className="ideal-weight-calculator">
			<h2>Калькулятор ідеальної ваги тіла</h2>
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
					Стать:
					<select value={gender} onChange={(e) => setGender(e.target.value)}>
						<option value="">Оберіть стать</option>
						<option value="male">Чоловік</option>
						<option value="female">Жінка</option>
					</select>
				</label>
			</div>
			<button onClick={calculateIdealWeight}>Розрахувати</button>
			{idealWeight && (
				<p className="result">Ваш идеальный вес: {idealWeight} кг</p>
			)}
		</div>
	);
};

export default Weight;

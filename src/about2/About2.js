import React from "react";
import "./about2.scss";
import me from "../img/me22.jpg";

const HomePage = () => {
	return (
		<div className="home-page">
			<main>
				<section className="hero">
					<h2>Ласкаво просимо на сайт персонального тренера</h2>
					<p>
						Покращіть свою фізичну форму та досягніть своїх цілей разом зі мною
					</p>
					<a href="#" className="btn">
						Розпочати тренування
					</a>
				</section>

				<section className="features">
					<div className="feature">
						<img src={me} alt="Функція 1" />
						<h3>Індивідуальні тренування</h3>
						<p>
							Я розроблю індивідуальну програму тренувань, яка відповідає вашим
							цілям та потребам.
						</p>
					</div>

					<div className="feature">
						<img src="feature2.png" alt="Функція 2" />
						<h3>Різноманітні програми</h3>
						<p>
							Ми пропонуємо широкий спектр тренувань, включаючи силові, кардіо,
							функціональні та інші.
						</p>
					</div>

					<div className="feature">
						<img src="feature2.png" alt="Функція 2" />
						<h3>Різноманітні програми</h3>
						<p>
							Ми пропонуємо широкий спектр тренувань, включаючи силові, кардіо,
							функціональні та інші.
						</p>
					</div>
				</section>
			</main>
		</div>
	);
};

export default HomePage;

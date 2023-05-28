import Carousel from "react-bootstrap/Carousel";
import myGym1 from "../img/mygym1.jpg";
import myGym2 from "../img/mygym2.jpg";
import myGym3 from "../img/mygym3.jpg";
import "./gym.scss";

function CarouselFadeExample() {
	return (
		<div className="myGymContainer">
			<Carousel fade>
				<Carousel.Item>
					<img className="d-block w-100" src={myGym1} alt="First slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={myGym2} alt="Second slide" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={myGym3} alt="Third slide" />
				</Carousel.Item>
			</Carousel>
			<p>
				Абонементи в тренажерний зал
				<br /> Разове відвідування (придбання тільки онлайн) - 100грн <br />
				<br />
				Повний день 15 тренувань - 600грн / 1міс
			</p>
			<p>
				Більш детально про зал та абонементи можна подивитися на сайті{" "}
				<a href="https://atletiko.club/page/grig_5a.html">Атлетіко</a>
			</p>
			<p className="gym_street">
				Знаходиться зал на вулиці Петра Григоренка 5-А, м.Позняки
			</p>
		</div>
	);
}

export default CarouselFadeExample;

import Carousel from "react-bootstrap/Carousel";
import free from "../img/free.jpg";
import "./trainings.scss";

const Trainings = () => {
	return (
		<div className="training-availability-table">
			<img src={free} alt="" />
			<p>
				Усі наявні вільні місця досить динамічно можуть змінюватись, але у
				загальному : червоні клітинки - зайняті, зелені - вільні повністю, жовті
				- є вільне одне місце, для уточнення напишіть мені{" "}
				<a href="https://t.me/nikitkaaa33">в особисті</a>
			</p>
		</div>
	);
};

export default Trainings;

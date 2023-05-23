import Carousel from "react-bootstrap/Carousel";

const Trainings = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://img.championat.com/s/735x490/news/big/t/e/kak-uskorit-trenirovku-v-zale_1570275389319394925.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://static.ua-football.com/img/upload/20/284ba6.jpeg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.goldsgym.ru/upload/medialibrary/4c0/4c05e8b013f2804d7beca4a07267698d.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Trainings;

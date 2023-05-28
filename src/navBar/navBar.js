import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navBar.scss";

const Navigation = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark" fixed>
				<Container>
					<Navbar.Brand href="/">Про Мене</Navbar.Brand>
					<Nav className="me-auto">
						<NavDropdown title="Додатково" id="basic-nav-dropdown">
							<NavDropdown.Item href="/calc">
								Калькулятор ідеальної ваги тіла
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/calories">
								Базовий обмін речовин
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/link">Звязок зі мною</NavDropdown.Item>
							{/* <NavDropdown.Item href="#action/3.4">
								Отдельная хуйня
							</NavDropdown.Item> */}
						</NavDropdown>
						<Nav.Link href="/trainings">Вільні місця</Nav.Link>
						<Nav.Link href="/price">Ціна</Nav.Link>
						<Nav.Link href="/feedback">Відгуки</Nav.Link>
						<Nav.Link href="/gym">Зал</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;

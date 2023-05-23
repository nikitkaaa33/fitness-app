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
							<NavDropdown.Item href="#action/3.1">Зала</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Звязок зі мною
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">чтото еще</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Отдельная хуйня
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/trainings">Тренування</Nav.Link>
						<Nav.Link href="/price">Ціна</Nav.Link>
						<Nav.Link href="/feedback">Відгуки</Nav.Link>
						<Nav.Link href="/calc">Калькулятор</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;

import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import PricingComponent from "./PriceContent/PriceContentOffline";
import PricingComponentOn from "./PriceContent/PriceContentOnline";
import PricingComponentOn2 from "./PriceContent/PriceContentOnline2";
import "./price.scss";

const Price = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="first" transition>
			<Row>
				<Col sm={3}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="first">Тренування в залі</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Онлайн заняття</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">Онлайн ведення</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={9}>
					<Tab.Content>
						<Tab.Pane eventKey="first">
							<PricingComponent />
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<PricingComponentOn />
						</Tab.Pane>
						<Tab.Pane eventKey="third">
							<PricingComponentOn2 />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};

export default Price;

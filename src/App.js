import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useLocation,
	Routes,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import PageTransition from "./ReactTransition/PageTransition";
import { useState, useRef } from "react";
import Navigation from "./navBar/navBar";
import MyComponent from "./about/About";
import Trainings from "./trainings/Trainings";
import Price from "./price/Price";
import Feed from "./feed/Feed";
import Gym from "./gym/Gym";
import Social from "./link/Link";
import Weight from "./weight/Weight";
import Calories from "./calories/Calories";

function App() {
	const [inProp, setInProp] = useState(false);
	const nodeRef = useRef(null);
	return (
		<Router>
			<div className="App">
				<Navigation />
				<TransitionGroup>
					<CSSTransition
						nodeRef={nodeRef}
						in={inProp}
						timeout={200}
						classNames="my-node"
					>
						<Routes ref={nodeRef}>
							<Route path="/" exact element={<MyComponent />} />
							<Route path="/trainings" exact element={<Trainings />} />
							<Route path="/price" exact element={<Price />} />
							<Route path="/feedback" exact element={<Feed />} />
							<Route path="/gym" exact element={<Gym />} />
							<Route path="/link" exact element={<Social />} />
							<Route path="/calc" exact element={<Weight />} />
							<Route path="/calories" exact element={<Calories />} />
						</Routes>
					</CSSTransition>
				</TransitionGroup>
			</div>
		</Router>
	);
}

export default App;

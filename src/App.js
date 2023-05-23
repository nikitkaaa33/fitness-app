import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigation from "./navBar/navBar";
import MyComponent from "./about/About";
import Trainings from "./trainings/Trainings";
import Price from "./price/Price";
import Feed from "./feed/Feed";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" exact element={<MyComponent />} />
					{/* <Route path="/about" component={MyComponent} /> */}
					<Route path="/trainings" exact element={<Trainings />} />
					<Route path="/price" exact element={<Price />} />
					<Route path="/feedback" exact element={<Feed />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

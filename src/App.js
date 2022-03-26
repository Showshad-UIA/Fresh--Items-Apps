import "./App.css";
import Header from "./components/Header/Header";
import Question1 from "./components/Question1/Question1";
import Question3 from "./components/Question3/Question3";
import Shop from "./components/Shop/Shop";
import Slider from "./components/Slider/Slider";

function App() {
	return (
		<div>
			<Header></Header>
			<Slider></Slider>
			<Shop></Shop>
			<Question1></Question1>
			<Question3></Question3>
		</div>
	);
}

export default App;

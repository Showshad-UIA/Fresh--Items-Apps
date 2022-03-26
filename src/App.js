import "./App.css";
import Footer from "./components/Footer/Footer";

import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Shop from "./components/Shop/Shop";
import Slider from "./components/Slider/Slider";

function App() {
	return (
		<div>
			<Slider></Slider>
			<Shop></Shop>
			<Question1></Question1>
			<Question2></Question2>
			<Question3></Question3>
			<Footer></Footer>
		</div>
	);
}

export default App;

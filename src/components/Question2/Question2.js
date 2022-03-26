import React from "react";
import "./Question2.css";

const Question2 = () => {
	return (
		<div className="Q2">
			<h2>What is the diffrence between state and Props ?</h2>
			<p>
				Based on my simple understanding props are usually work for transfering
				data diffrent diffrent component like parent to child. Moreover, props
				performance is very good and it is immutable. Beside that I would say
				state is a update able like any types of changes state handle.The change
				in state can occured as a response to user action. react component which
				determines the behavior of the component and how actually render.
				Normally, our task is to be kept as simple. Lastly, state also present
				the component's local state or information{" "}
			</p>
		</div>
	);
};

export default Question2;

import "./calculator.scss";
import { useState } from "react";
import Button from "./Button";
import { btns, BTNS_ACTION } from "../../buttonsConfig/buttonsConfig";

const Calculator = ({ setOutput }) => {
	return (
		<div className="grid">
			<div className="output">
				<div className="output__previous">234243</div>
				<div className="output__current">12312312313123112</div>
			</div>
			{btns.map((item, index) => (
				<button key={index} className={item.class}>
					{item.display}
				</button>
			))}
		</div>
	);
};

export default Calculator;

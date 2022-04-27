import './calculator.scss';
import { useCallback, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { btns } from '../../buttonsConfig/buttonsConfig';

const Calculator = () => {
	const [{ previousOperand, currentOperand, operation }, dispatch] =
		useReducer(reducer, {});

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	const handleKeyDown = useCallback((e) => {
		// e.preventDefault();
		console.log(e.key);
		let key = e.key;
		switch (key) {
			case 'Backspace':
				key = 'DEL';
				break;
			case 'Enter':
				key = '=';
				break;
			case '/':
				key = '÷';
				break;
			case '*':
				key = '×';
				break;
		}
		const currentBtn = btns.find((btn) => btn.display === key);
		if (currentBtn) {
			dispatch({
				type: currentBtn.action,
				payload: key,
			});
		}
	}, []);

	const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
		maximumFractionDigits: 0,
	});

	const formatOperand = (operand) => {
		if (operand == null) return;
		const [integer, decimal] = operand?.split('.');
		if (decimal == null) return INTEGER_FORMATTER.format(integer);
		return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
	};
	// onKeyDown = { handleKeyDown };
	return (
		<div className="grid">
			<div className="output">
				<div className="output__previous">
					{formatOperand(previousOperand)} {operation}
				</div>
				<div className="output__current">
					{formatOperand(currentOperand)}
				</div>
			</div>
			{btns.map((btn, index) => (
				<button
					onClick={() =>
						dispatch({ type: btn.action, payload: btn.display })
					}
					key={index}
					tabIndex={-1}
					className={btn.class}
				>
					{btn.display}
				</button>
			))}
		</div>
	);
};

export default Calculator;

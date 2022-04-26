import './calculator.scss';
import { useReducer, useState } from 'react';
import Button from './Button';
import { btns, BTNS_ACTION } from '../../buttonsConfig/buttonsConfig';
import { logDOM } from '@testing-library/react';

function reducer(state, { type, payload }) {
	switch (type) {
		case BTNS_ACTION.ADD:
			if (state.overwrite)
				return { ...state, currentOperand: payload, overwrite: false };
			if (payload === '0' && state.currentOperand === '0') return state;
			if (payload === '.' && state.currentOperand.includes('.'))
				return state;
			return {
				...state,
				currentOperand: `${state.currentOperand || ''}${payload}`,
			};
		case BTNS_ACTION.DELETE:
			if (state.overwrite) {
				return {
					...state,
					overwrite: false,
					currentOperand: null,
				};
			}
			if (state.currentOperand == null) return state;
			if (state.currentOperand?.length === 1)
				return {
					...state,
					currentOperand: 0,
				};
			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};
		case BTNS_ACTION.CALC:
			if (state.currentOperand == null && state.previousOperand == null) {
				return state;
			}
			if (state.currentOperand == null) {
				return {
					...state,
					operation: payload,
				};
			}
			if (state.previousOperand == null) {
				return {
					...state,
					operation: payload,
					previousOperand: state.currentOperand,
					currentOperand: null,
				};
			}
			return {
				...state,
				operation: payload,
				previousOperand: calc(state),
				currentOperand: null,
			};
		case BTNS_ACTION.EVALUATE:
			if (
				state.currentOperand == null ||
				state.previousOperand == null ||
				state.operation == null
			)
				return state;
			return {
				...state,
				overwrite: true,
				operation: null,
				previousOperand: null,
				currentOperand: calc(state),
			};
		case BTNS_ACTION.CLEAR:
			return {};
	}
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
	maximumFractionDigits: 0,
});

function formatOperand(operand) {
	if (operand == null) return;
	const [integer, decimal] = operand.split('.');
	if (decimal == null) return INTEGER_FORMATTER.format(integer);
	return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

function calc({ currentOperand, previousOperand, operation }) {
	let current = parseFloat(currentOperand);
	let previous = parseFloat(previousOperand);
	if (isNaN(current) || isNaN(previousOperand)) return '';
	let computation = '';
	switch (operation) {
		case '+':
			computation = previous + current;
			break;
		case '-':
			computation = previous - current;
			break;
		case '×':
			computation = previous * current;
			break;
		case '÷':
			computation = previous / current;
			break;
		case '%':
			computation = previous / 100;
			break;
	}
	return String(computation);
}

const Calculator = ({ setOutput }) => {
	const [{ previousOperand, currentOperand, operation }, dispatch] =
		useReducer(reducer, {});
	return (
		<div
			// onKeyDown={(e) =>
			// 	e.key === btn.display
			// 		? dispatch({
			// 				type: btn.action,
			// 				payload: btn.display,
			// 		  })
			// 		: null
			// }
			className="grid"
		>
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
					className={btn.class}
				>
					{btn.display}
				</button>
			))}
		</div>
	);
};

export default Calculator;

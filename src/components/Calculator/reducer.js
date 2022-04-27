import { BTNS_ACTION } from '../../buttonsConfig/buttonsConfig';

export default function reducer(state, { type, payload }) {
	switch (type) {
		case BTNS_ACTION.ADD:
			if (state.overwrite) {
				return { ...state, currentOperand: payload, overwrite: false };
			}
			if (payload === '0' && state.currentOperand === '0') return state;
			if (
				payload === '.' &&
				state.currentOperand != null &&
				state.currentOperand.includes('.')
			) {
				return state;
			}
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
			if (state.currentOperand.length === 1)
				return {
					...state,
					currentOperand: '0',
				};
			return {
				...state,
				currentOperand: state.currentOperand.slice(0, -1),
			};
		case BTNS_ACTION.CALC:
			if (payload === '%' && state.currentOperand != null) {
				return {
					...state,
					operation: null,
					previousOperand: null,
					currentOperand: String(state.currentOperand / 100),
				};
			}
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
			) {
				return state;
			}
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

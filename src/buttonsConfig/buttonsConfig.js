export const BTNS_ACTION = {
	ADD: "ADD",
	DELETE: "DELETE",
	CLEAR: "CLEAR",
	CALC: "CALC",
	THEME: "THEME",
};
export const btns = [
	{
		display: "AC",
		action: BTNS_ACTION.CLEAR,
		class: "grid__item grid__item_sub",
	},
	{
		display: "DEL",
		action: BTNS_ACTION.DELETE,
		class: "grid__item grid__item_sub",
	},
	{
		display: "%",
		action: BTNS_ACTION.CALC,
		class: "grid__item grid__item_sub",
	},
	{
		display: "÷",
		action: BTNS_ACTION.CALC,
		class: "grid__item grid__item_accent",
	},
	{
		display: "7",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "8",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "9",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "×",
		action: BTNS_ACTION.CALC,
		class: "grid__item grid__item_accent",
	},
	{
		display: "4",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "5",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "6",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "-",
		action: BTNS_ACTION.CALC,
		class: "grid__item grid__item_accent",
	},
	{
		display: "1",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "2",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "3",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "+",
		action: BTNS_ACTION.CALC,
		class: "grid__item grid__item_accent",
	},
	{
		display: "0",
		action: BTNS_ACTION.ADD,
		class: "grid__item grid__item_wide",
	},
	{
		display: ",",
		action: BTNS_ACTION.ADD,
		class: "grid__item",
	},
	{
		display: "=",
		action: BTNS_ACTION.ADD,
		class: "grid__item grid__item_accent",
	},
];

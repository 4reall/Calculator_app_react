import './controls.scss';

const Controls = () => {
	const operators = [
		'AC',
		'±',
		'%',
		'÷',
		'7',
		'8',
		'9',
		'×',
		'4',
		'5',
		'6',
		'-',
		'1',
		'2',
		'3',
		'+',
		'0',
		',',
		'=',
	];
	const buttons = operators.map((item, i) => {
		const className = item.match(/[÷×+\-=]/)
			? 'grid__item-accent'
			: item.match(/[AC±%]/)
			? 'grid__item-sub'
			: null;
		return <Button key={i} highlightClass={className} operator={item} />;
	});
	return <ul className="grid">{buttons}</ul>;
};

const Button = (props) => {
	const { operator, highlightClass } = props;
	return (
		<li ~className={`grid__item ${highlightClass}`} data-operator={`${operator}`}>
			<span>{operator}</span>
		</li>
	);
};
export default Controls;

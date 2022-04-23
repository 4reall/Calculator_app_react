const Button = (props) => {
	const { operator, highlightClass, onInput } = props;
	return (
		<li
			onClick={(e) => onInput(e.currentTarget)}
			tabIndex={0}
			className={`grid__item ${highlightClass}`}
			data-operator={`${operator}`}
		>
			<span>{operator}</span>
		</li>
	);
};
export default Button;

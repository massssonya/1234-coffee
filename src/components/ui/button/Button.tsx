import { IButton } from "./button.props";
import "./button.css";

export const Button = ({
	className = "button default",
	children = "Button",
	onClick,
	...props
}: IButton): JSX.Element => {
	return (
		<button onClick={onClick} className={className} {...props}>
			{children}
		</button>
	);
};

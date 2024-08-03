import { TColors } from "./badge.props";
import "./badge.css";

export const Badge = ({
	children,
	color = "default",
}: {
	children: React.ReactNode;
	color?: TColors;
}) => {
	return <span className={`badge ${color}`}>{children}</span>;
};

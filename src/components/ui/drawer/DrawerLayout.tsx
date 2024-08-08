import { IDrawerLayout } from "./layout.props";
import "./Drawer.css";

export const DrawerLayout = ({ position, children, isOpen }: IDrawerLayout) => {
	return (
		<div className={`drawer-layout ${position} ${isOpen ? "" : "close"}`}>
			{children}
		</div>
	);
};

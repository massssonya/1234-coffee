import { motion } from "framer-motion";
import { IDrawerLayout } from "./layout.props";

export const DrawerLayout = ({
	position,
	children,
	animation
}: IDrawerLayout) => {
	return (
		<motion.div className={`drawer-layout ${position}`} {...animation}>
			{children}
		</motion.div>
	);
};

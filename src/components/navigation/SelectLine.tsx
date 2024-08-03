import { motion } from "framer-motion";

export const SelectLine = () => {
	return (
		<motion.div
			layoutId="activeItem"
			className="navigation-list__select-line"
			style={{
				width: "100%",
				height: "3px",
				bottom: "-0.25rem"
			}}
		></motion.div>
	);
};

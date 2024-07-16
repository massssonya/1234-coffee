import { motion } from "framer-motion";

const SelectLine = () => {
	return (
		<motion.div
			layoutId="activeItem"
			className="navigation-list__select-line"
			style={{
				// backgroundColor: "rgba(0, 0, 0)",
				width: "100%",
				height: "3px",
				bottom: "-0.25rem"
			}}
		></motion.div>
	);
};

export default SelectLine;

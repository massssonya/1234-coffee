import { motion } from "framer-motion";

const SelectLine = () => {
  return (
    <motion.div
	layoutId="activeItem"
      style={{
        backgroundColor: "rgba(0, 0, 0)",
		width: "calc(100% - 0px)",
		height: "3px",
		bottom: "-0.25rem",
      }}
    ></motion.div>
  );
};

export default SelectLine;

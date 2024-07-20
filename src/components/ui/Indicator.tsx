import { motion } from "framer-motion";

export const Indicator = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ y: -30, rotate: -90}}
			animate={{ y: 0, rotate: 0 }}

			transition={{ duration: 0.5, delay: 0.5, ease: "backInOut" }}
			className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
		>
			{children}
		</motion.div>
	);
};

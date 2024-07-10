import { motion } from "framer-motion";

export const CardDescription = ({
	description
}: {
	description: string | undefined;
}) => {
	return (
		<div className="relative">
			<motion.div
				className="card-description"
				initial={{ height: 0, filter: "blur(5px)" }}
				animate={{ height: "auto", filter: "blur(0px)" }}
				transition={{ duration: 0.3 }}
				exit={{ height: 0, filter: "blur(5px)" }}
			>
				<p>{description}</p>
			</motion.div>
		</div>
	);
};

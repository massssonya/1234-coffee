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
				initial={{ height: 0 }}
				animate={{ height: "auto" }}
				transition={{ duration: 0.1 }}
				exit={{ height: 0 }}
			>
				<p>{description}</p>
			</motion.div>
		</div>
	);
};

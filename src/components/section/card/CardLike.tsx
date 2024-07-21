import { motion } from "framer-motion";

export const CardLike = ({
	isLike,
	handleClick
}: {
	isLike: boolean;
	handleClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}) => {
	return (
		<motion.span
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.1 }}
			className="absolute top-2 right-2 w-10 flex justify-center"
		>
			<svg
				onClick={(e) => handleClick(e)}
				className="text-white cursor-pointer"
				fill={isLike ? "rgb(255 255 255)" : "none"}
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		</motion.span>
	);
};

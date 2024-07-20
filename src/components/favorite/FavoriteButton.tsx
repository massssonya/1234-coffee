import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button } from "../ui/button/Button";
import { FavoriteDrawer } from "./FavoriteDrawer";

export const FavoriteButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const favorite = useTypedSelector((state) => state.favorite);

	const handleToggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<AnimatePresence>
				{favorite.length > 0 && (
					<motion.div
						initial={{ y: -50 }}
						animate={{ y: 0 }}
						exit={{ y: -50 }}
						transition={{ duration: 0.5 }}
					>
						<Button className="button relative" onClick={handleToggleDrawer}>
							Избранное
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
			<FavoriteDrawer isOpen={isOpen} setIsOpen={setIsOpen} data={favorite} />
		</>
	);
};

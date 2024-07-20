import { motion, AnimatePresence } from "framer-motion";
import { Drawer } from "../ui/drawer/Drawer";
import { ISectionItem } from "@/interfaces";

export const FavoriteDrawer = ({
	isOpen,
	setIsOpen,
	data
}: {
	isOpen: boolean;
	setIsOpen: (b: boolean) => void;
	data: ISectionItem[];
}) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed bottom-0 left-0 right-0 z-40 "
					initial={{ y: 250 }}
					animate={{ y: 0 }}
					exit={{ y: 250 }}
					transition={{ duration: 0.5 }}
				>
					<Drawer onClose={() => setIsOpen(false)}>
						{data.map((item) => (
							<div key={item.id}>{item.name}</div>
						))}
					</Drawer>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

import { AnimatePresence } from "framer-motion";
import { useContext, useEffect } from "react";

import { CartContext } from "@hooks/context/cart/CartContext";

import { DrawerLayout } from "../ui/drawer/DrawerLayout";
import { Drawer } from "../ui/drawer/Drawer";
import { CartForm } from "./CartForm";

export const Cart = () => {
	const { isOpen, setIsOpen, animationCart } = useContext(CartContext);

	const animation = {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: { duration: 0.2 }
	};

	useEffect(() => {
		animationCart();
	}, [isOpen, animationCart]);

	return (
		<AnimatePresence>
			{isOpen && (
				<DrawerLayout position="right" animation={animation}>
					<Drawer onClose={setIsOpen} title="Корзина">
						<CartForm />
					</Drawer>
				</DrawerLayout>
			)}
		</AnimatePresence>
	);
};

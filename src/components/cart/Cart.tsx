import { DrawerLayout } from "../ui/drawer/DrawerLayout";
import { Drawer } from "../ui/drawer/Drawer";
import { CartForm } from "./CartForm";
import { useContext, memo, useCallback } from "react";
import { CartContext } from "@/hooks/context/cart/CartContext";

export const Cart = memo(
	({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
		const { isOpen, setIsOpen } = useContext(CartContext);

		const handleClose = useCallback(() => {
			setIsOpen();
		}, [setIsOpen]);

		return (
			<DrawerLayout position="right" isOpen={isOpen}>
				<Drawer onClose={handleClose} title="Корзина">
					<CartForm
						setActiveSection={setActiveSection}
						closeCart={handleClose}
					/>
				</Drawer>
			</DrawerLayout>
		);
	}
);

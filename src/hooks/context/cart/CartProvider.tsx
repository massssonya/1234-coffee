import { useState } from "react";

import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<CartContext.Provider value={{ isOpen, setIsOpen: toggleCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

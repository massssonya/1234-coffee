import { useState, useEffect } from "react";

import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleCart = () => {
		setIsOpen((prev) => !prev);
	};

	const setBodyOverflow = (overflow: string) => {
		const body = document.querySelector("body");
		if (body) {
			body.style.overflow = overflow;
		}
	};

	useEffect(() => {
		setBodyOverflow(isOpen ? "hidden" : "auto");
		return () => {
			setBodyOverflow("auto");
		};
	}, [isOpen]);

	return (
		<CartContext.Provider
			value={{
				isOpen,
				setIsOpen: toggleCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

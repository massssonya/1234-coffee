import { useState, useEffect } from "react";

import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen((prev) => !prev);
	};

	const setBodyOverflow = (isOpen: boolean) => {
		const overflow = isOpen ? "hidden" : "auto";
		// const position = isOpen ? "fixed" : "relative";
		const body = document.querySelector("body");
		if (body) {
			body.style.overflow = overflow;
			// body.style.position = position;
		}
	};

	useEffect(() => {
		setBodyOverflow(isOpen);
		return () => {
			setBodyOverflow(false);
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

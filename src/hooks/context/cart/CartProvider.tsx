import { useState } from "react";

import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleCart = () => {
		setIsOpen((prev) => !prev);
	};

	const setBodyOverflow = (overflow: string) => {
		const body = document.querySelector("body");
		if (body) {
			body.style.overflow = overflow;
		}
	};

	const setNavTransform = (isOpen: boolean, offsetY: number | undefined) => {
		const nav = document.getElementById("nav");
		if (nav) {
			nav.style.transition = "all .5s";
			nav.style.transform = isOpen
				? `translateY(${offsetY}px)`
				: "translateY(0)";
		}
	};

	const setSectionTransform = (isOpen: boolean) => {
		const section = document.getElementById("section");
		if (section) {
			section.style.transition = "all .3s";
			section.style.pointerEvents = isOpen ? "none" : "auto";
			section.style.filter = isOpen ? "grayscale(100%) blur(3px)" : "none";
			section.style.transform = isOpen ? "translateX(-20%)" : "none";
		}
	};

	const animationCart = () => {
		const body = document.querySelector("body");
		const offsetY = body?.getBoundingClientRect().top ?? 0;
		setBodyOverflow(isOpen ? "hidden" : "auto");
		setNavTransform(isOpen, offsetY);
		setSectionTransform(isOpen);
	};

	return (
		<CartContext.Provider
			value={{
				isOpen,
				setIsOpen: toggleCart,
				animationCart: animationCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;

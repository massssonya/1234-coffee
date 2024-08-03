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

	const setNavTransform = (isOpen: boolean) => {
		const nav = document.getElementById("nav");
		const style = nav?.style;
		if (nav && style) {
			style.transition = "all .5s";
			style.transform = isOpen ? `translateY(${-60}px)` : "translateY(0)";
		}
	};

	const setSectionTransform = () => {
		const page = document.getElementById("main-page");
		if (page) {
			isOpen
				? page.classList.toggle("animationBlur")
				: page.classList.remove("animationBlur");
		}
	};

	const animationCart = () => {
		setNavTransform(isOpen);
		setBodyOverflow(isOpen ? "hidden" : "auto");
		setSectionTransform();
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

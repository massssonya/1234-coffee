import { useRef, useEffect, useContext } from "react";

import { NavigationLink } from "./NavigationLink";
import { BurgerMenu } from "../burger/BurgerMenu";
import { CartButton } from "./CartButton";
import { AccountButton } from "./AccountButton";
import "./Navigation.css";
import { CartContext } from "@/hooks/context/cart/CartContext";

export function Navigation({
	items,
	activeSection,
	setActiveSection
}: {
	items: { id: string; title: string }[];
	activeSection: string;
	setActiveSection: (s: string) => void;
}) {
	const ulRef = useRef<HTMLUListElement>(null);
	const { isOpen } = useContext(CartContext);
	console.log("Navigation rendered");
	useEffect(() => {
		if (!activeSection) return;
		const li = document.getElementById(`li_${activeSection}`);
		const ul = ulRef.current;
		if (ul) {
			ul.scrollTo({
				behavior: "smooth",
				left: li?.offsetLeft ?? 0
			});
		}
		return () => {
			if (ul)
				ul.scrollTo({
					behavior: "smooth",
					left: 0
				});
		};
	}, [activeSection]);

	return (
		<nav className={`navigation ${isOpen ? "hidden" : ""}`} id="nav">
			<ul ref={ulRef} className="navigation-list">
				{items.map((item) => {
					return (
						<NavigationLink
							key={item.id}
							item={item}
							activeSection={activeSection}
							setActiveSection={setActiveSection}
						/>
					);
				})}
			</ul>
			<ul className="navigation-list__btns">
				<li className="cart-btn hidden md:block">
					<CartButton />
				</li>
				<li className="account-btn hidden md:block">
					<AccountButton />
				</li>
				<li className="md:hidden">
					<BurgerMenu />
				</li>
			</ul>
		</nav>
	);
}

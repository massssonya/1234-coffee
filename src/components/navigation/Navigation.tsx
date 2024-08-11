import { useRef, useEffect, useContext } from "react";

import { ShoppingCart } from "lucide-react";
import { NavigationLink } from "./NavigationLink";
import { BurgerMenu } from "../burger/BurgerMenu";
import { AccountButton } from "./buttons/AccountButton";
import "./Navigation.css";
import { CartContext } from "@/hooks/context/cart/CartContext";
import { Button } from "@components/ui/button/Button";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { SocialButton } from "./buttons/SocialButton/SocialButton";
import { contacts, TSocial } from "@constants/contacts";

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
	const { isOpen, setIsOpen } = useContext(CartContext);
	const { totalPrice } = useTypedSelector((state) => state.cart);

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
		<>
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
					<li className="account-btn hidden md:block">
						<AccountButton />
					</li>
					<li className="md:hidden">
						<BurgerMenu />
					</li>
				</ul>
			</nav>

			<SocialButton
				position="left"
				array={contacts.socials as Array<TSocial>}
			/>

			<Button
				onClick={setIsOpen}
				className={`button cart cart-btn ${isOpen ? "close" : ""}`}
			>
				<ShoppingCart color="white" size={24} />
				<span className="sm:text-lg text-base">{totalPrice} ₽</span>
			</Button>
		</>
	);
}

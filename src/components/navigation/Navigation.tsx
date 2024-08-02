import { useRef, useLayoutEffect } from "react";

import { NavigationLink } from "./NavigationLink";
// import { FavoriteButton } from "../favorite/FavoriteButton";
import { BurgerMenu } from "../burger/BurgerMenu";
import { CartButton } from "./CartButton";
import { AccountButton } from "./AccountButton";

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

	useLayoutEffect(() => {
		const li = document.getElementById(`li_${activeSection}`);
		if (ulRef.current) {
			ulRef.current.scrollTo({
				behavior: "smooth",
				left: li?.offsetLeft ?? 0
			});
		}
	}, [activeSection]);

	return (
		<nav className="navigation" id="nav">
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

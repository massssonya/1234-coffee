import { PLACEHOLDER_ITEMS as items } from "../../../constants/placeholder.data";

export const NavigationPlaceholder = () => {
	return (
		<nav className="navigation animate-pulse">
			<ul className="navigation-list">
				{items.map((item) => {
					return (
						<li
							key={item.id}
							id={`li_${item.id}`}
							className="navigation-list__item"
						>
							<div className="h-6 w-28 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</li>
					);
				})}
			</ul>
			<ul className="navigation-list__btns">
				<li className="cart-btn hidden md:block">
					<div className="h-6 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</li>
				<li className="account-btn hidden md:block">
					<div className="h-6 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</li>
				<li className="md:hidden">
					<div className="h-6 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
				</li>
			</ul>
		</nav>
	);
};

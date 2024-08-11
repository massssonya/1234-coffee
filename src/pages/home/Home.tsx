import { useState } from "react";

import { Navigation } from "@components/navigation/Navigation";
import { getSectionNavigation } from "@/utils";
import { useGetFoodsQuery } from "@store/food/food.api";
import { Cart } from "@components/cart/Cart";
import { NavigationPlaceholder } from "@components/ui/skeleton/NavigationPlaceholder";
import { SectionItemPlaceholder } from "@components/ui/skeleton/SectionItemPlaceholder";
import { Menu } from "@components/menu/Menu";
import "./Home.css";
import { CartProvider } from "@/hooks/context/cart/CartProvider";

export const Home = () => {
	const [activeSection, setActiveSection] = useState("");
	const { isLoading, isSuccess, data } = useGetFoodsQuery();

	const skeleton = (
		<div className="page-wrapper mx-auto">
			<NavigationPlaceholder />
			<SectionItemPlaceholder />
		</div>
	);
	return (
		<>
			{isLoading ? (
				skeleton
			) : (
				<CartProvider>
					<Navigation
						items={isSuccess ? getSectionNavigation(data) : []}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>

					<Menu />
					<Cart setActiveSection={setActiveSection} />
				</CartProvider>
			)}
		</>
	);
};

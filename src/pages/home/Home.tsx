import { useState } from "react";

import { Navigation } from "@components/navigation/Navigation";
import { getSectionNavigation } from "@/utils";
import { CartProvider } from "@hooks/context/cart/CartProvider";
import { useGetFoodsQuery } from "@store/food/food.api";
import { Footer } from "@components/footer/Footer";
import { AlertingService } from "@components/alerting_service/AlertingService";
import { Cart } from "@components/cart/Cart";
import { NavigationPlaceholder } from "@/components/ui/skeleton/NavigationPlaceholder";
import { SectionItemPlaceholder } from "@/components/ui/skeleton/SectionItemPlaceholder";
import { Menu } from "@/components/menu/Menu";
import "./Home.css";

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
		<CartProvider>
			{isLoading ? (
				skeleton
			) : (
				<>
					<Navigation
						items={isSuccess ? getSectionNavigation(data) : []}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>

					<Menu />
					<Footer />
				</>
			)}
			<Cart />
			<AlertingService horizontal="right" vertical="bottom" />
		</CartProvider>
	);
};

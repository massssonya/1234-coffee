import { CartProvider } from "@hooks/context/cart/CartProvider";
import { useGetFoodsQuery } from "@store/food/food.api";
import { Footer } from "@components/footer/Footer";
import { AlertingService } from "@components/alerting_service/AlertingService";
import { Cart } from "@components/cart/Cart";
import { NavigationPlaceholder } from "@/components/ui/skeleton/NavigationPlaceholder";
import { SectionItemPlaceholder } from "@/components/ui/skeleton/SectionItemPlaceholder";
import { Menu } from "@/components/menu/Menu";

export const Home = () => {
	const { isLoading } = useGetFoodsQuery();
	const skeleton = (
		<div className="page-wrapper mx-auto">
			<NavigationPlaceholder />
			<SectionItemPlaceholder />
		</div>
	);
	return (
		<CartProvider>
			{isLoading ? skeleton : <Menu />}
			<Cart />
			<AlertingService horizontal="right" vertical="bottom" />
			<Footer />
		</CartProvider>
	);
};

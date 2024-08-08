import { Section } from "@components/section/Section";
import { useGetFoodsQuery } from "@store/food/food.api";
import "./Menu.css";
import { useContext } from "react";
import { CartContext } from "@/hooks/context/cart/CartContext";

export const Menu = () => {
	const { data } = useGetFoodsQuery();
	const { isOpen } = useContext(CartContext);
	return (
		<main
			className={`page-wrapper mx-auto transition-all duration-500 ${
				isOpen ? "animationBlur" : ""
			}`}
			id="main-page"
		>
			{data && data.map((item) => <Section key={item.id} item={item} />)}
			{/* {favorite.length > 0 && <SectionItem id="favorite" title="Favorite" items={favorite} />} */}
		</main>
	);
};

import { Section } from "@components/section/Section";
import { useGetFoodsQuery } from "@store/food/food.api";
import "./Menu.css";

export const Menu = () => {
	const { data } = useGetFoodsQuery();
	return (
		<main
			className="page-wrapper mx-auto transition-all duration-500"
			id="main-page"
		>
			{data && data.map((item) => <Section key={item.id} item={item} />)}
			{/* {favorite.length > 0 && <SectionItem id="favorite" title="Favorite" items={favorite} />} */}
		</main>
	);
};

import { useState } from "react";

import { Navigation } from "../navigation/Navigation";
import { Section } from "@/components/section/Section";
import { useGetFoodsQuery } from "@store/food/food.api";
import { getSectionNavigation } from "@/utils";

export const Menu = () => {
	const [activeSection, setActiveSection] = useState("");
	const { data, isSuccess } = useGetFoodsQuery();
	return (
		<main className="page-wrapper mx-auto" id="mainPage">
			<Navigation
				items={isSuccess ? getSectionNavigation(data) : []}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			{data && data.map((item) => <Section key={item.id} item={item} />)}
			{/* {favorite.length > 0 && <SectionItem id="favorite" title="Favorite" items={favorite} />} */}
		</main>
	);
};

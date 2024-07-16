import { FC, useState } from "react";

import { Navigation } from "../navigation/Navigation";
import { SectionItem } from "./SectionItem";
import { useGetFoodsQuery } from "@store/food/food.api";
import { ISection } from "@/interfaces";
import { SectionItemPlaceholder } from "../ui/skeleton/SectionItemPlaceholder";
import { NavigationPlaceholder } from "../ui/skeleton/NavigationPlaceholder";

const Section: FC = () => {
	const [activeSection, setActiveSection] = useState("");
	const { data, isLoading, error, isSuccess, isError } = useGetFoodsQuery();

	const sectionNavigation = (
		items: ISection[]
	): { id: string; title: string }[] => {
		const sections = items?.map((item) => ({
			id: item.id,
			title: item.title
		}));

		return sections;
	};

	return (
		<>
			<div className="page-wrapper mx-auto">
				{isLoading ? (
					<NavigationPlaceholder />
				) : (
					<Navigation
						items={isSuccess ? sectionNavigation(data) : []}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
				)}

				<main>
					{isLoading ? (
						<SectionItemPlaceholder />
					) : isError ? (
						<div className="text-red-500">{error}</div>
					) : (
						data?.map((item) => <SectionItem key={item.id} item={item} />)
					)}
					{/* {favorite.length > 0 && <SectionItem id="favorite" title="Favorite" items={favorite} />} */}
				</main>

			</div>
		</>
	);
};

export default Section;

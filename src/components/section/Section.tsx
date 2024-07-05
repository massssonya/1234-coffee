import { useState } from "react";
import { Navigation } from "../navigation/Navigation";
import { SectionItem } from "./SectionItem";
import { useGetFoodsQuery } from "../../store/food/food.api";
import { ISection } from "../../interfaces";
// import { GetData } from "../../data";

const Section = () => {
	const [activeSection, setActiveSection] = useState("");

	// const data = GetData();

	const { data, isSuccess } = useGetFoodsQuery();

	if (!isSuccess) return <div>Loading...</div>;

	const sectionNavigation = (
		items: ISection[]
	): { id: string; title: string }[] => {
		const sections = items?.map((item) => ({
			id: item.id,
			title: item.title
		}));

		return sections || [];
	};
	const sections = data?.map((item) => (
		<SectionItem key={item.id} data={item} />
	));

	return (
		<>
			<div className="page-wrapper mx-auto">
				<nav className="navigation">
					<Navigation
						items={isSuccess ? sectionNavigation(data) : []}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
				</nav>
				<main>{sections}</main>
			</div>
		</>
	);
};

export default Section;

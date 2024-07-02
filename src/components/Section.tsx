import {useMemo, useState } from "react";

import { Navigation } from "./Navigation";
import { SectionItem } from "./SectionItem";
import { data } from "../data";

const Section = () => {
	const [activeSection, setActiveSection] = useState("");

	const sections = useMemo(
		() =>
			data.map((item) => (
				<SectionItem
					key={item.id}
					data={item}
				/>
			)),
		[]
	);

	return (
		<>
			<div className="page-wrapper mx-auto">
				<nav className="navigation">
					<Navigation
						items={data}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
				</nav>
				<div className="section">{sections}</div>
			</div>
		</>
	);
};

export default Section;

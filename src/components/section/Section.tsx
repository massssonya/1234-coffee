import { useState } from "react";

import { Navigation } from "../navigation/Navigation";
import { SectionItem } from "./SectionItem";
import { GetData } from "../../data";

const Section = () => {
	const [activeSection, setActiveSection] = useState("");

	const data = GetData();

	const sections = data.map((item) => (
		<SectionItem key={item.id} data={item} />
	));

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
				<main>{sections}</main>
			</div>
		</>
	);
};

export default Section;

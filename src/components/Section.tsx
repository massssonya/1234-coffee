import { useState, useEffect, createRef, useMemo } from "react";

import { Navigation } from "./Navigation";
import { SectionItem } from "./SectionItem";
import { data } from "../data";

const Section = () => {
	const [activeSection, setActiveSection] = useState("");
	const [pageHeight, setPageHeight] = useState();

	useEffect(() => {
		setPageHeight(window.innerHeight);
		window.addEventListener("resize", (e) => {
			setTimeout(() => {
				setPageHeight(window.innerHeight);
			}, 300);
		});
	}, []);

	const refs = data.reduce((refsObj, section) => {
		refsObj[section.id] = createRef();
		return refsObj;
	}, {});

	const handleCLick = (id) => {
		refs[id].current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};

	const sections = useMemo(
		() =>
			data.map((item) => (
				<SectionItem
					key={item.id}
					activeSection={activeSection}
					data={item}
					setActiveSection={setActiveSection}
					pageHeight={pageHeight}
					refs={refs}
				/>
			)),
		[activeSection, pageHeight, refs]
	);

	return (
		<>
			<div className="page-wrapper mx-auto">
				<nav className="navigation">
					<Navigation
						items={data}
						activeSection={activeSection}
						handleCLick={handleCLick}
					/>
				</nav>
				<div className="section">{sections}</div>
			</div>
		</>
	);
};

export default Section;

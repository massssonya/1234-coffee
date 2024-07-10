import { useRef, useLayoutEffect } from "react";

import { NavigationLink } from "./NavigationLink";

export function Navigation({
	items,
	activeSection,
	setActiveSection
}: {
	items: { id: string; title: string }[];
	activeSection: string;
	setActiveSection: (s: string) => void;
}) {
	const ulRef = useRef<HTMLUListElement>(null);

	useLayoutEffect(() => {
		const li = document.getElementById(`li_${activeSection}`);
		ulRef.current.scrollTo({
			behavior: "smooth",
			left: li?.offsetLeft ?? 0
		});
	}, [activeSection]);

	return (
		<nav className="navigation">
			<ul ref={ulRef} className="navigation-list">
				{items.map((item) => {
					return (
						<NavigationLink
							key={item.id}
							item={item}
							activeSection={activeSection}
							setActiveSection={setActiveSection}
						/>
					);
				})}
			</ul>
		</nav>
	);
}

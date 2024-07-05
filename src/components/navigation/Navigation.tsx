import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import SelectLine from "./SelectLine";

export function Navigation({
	items,
	activeSection,
	setActiveSection
}: {
	// items: ISection[];
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
		<ul ref={ulRef} className="navigation-list">
			{items.map((item) => {
				return (
					<motion.li
						key={item.id}
						id={`li_${item.id}`}
						className="navigation-list__item"
					>
						<Link
							to={item.id}
							smooth={true}
							duration={500}
							offset={0}
							spy={true}
							onSetActive={() => setActiveSection(item.id)}
						>
							{item.title}
							{item.id == activeSection && <SelectLine />}
						</Link>
					</motion.li>
				);
			})}
		</ul>
	);
}

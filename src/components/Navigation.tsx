import { motion } from "framer-motion";

import SelectLine from "./SelectLine";

export function Navigation({ items, activeSection, handleCLick }) {
	return (
		<ul className="navigation-list">
			{items.map((item) => {
				const activeClass =
					activeSection == item.id ? "navigation-list__item--active" : "";
				return (
					<motion.li
						key={item.id}
						id={item.id}
						className={`navigation-list__item ${activeClass}`}
						onClick={() => handleCLick(item.id)}
					>
						{item.title}
						{activeSection == item.id && <SelectLine />}
					</motion.li>
				);
			})}
		</ul>
	);
}

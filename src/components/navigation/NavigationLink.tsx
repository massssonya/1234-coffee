import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SelectLine from "./SelectLine";

export const NavigationLink = ({
	item,
	activeSection,
	setActiveSection
}: {
	item: { id: string; title: string };
	activeSection: string;
	setActiveSection: (s: string) => void;
}) => {
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
};

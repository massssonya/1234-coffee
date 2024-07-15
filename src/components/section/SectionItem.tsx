import { motion } from "framer-motion";

import { Card } from "../cards/Card";
import { ISection } from "../../interfaces";

export const SectionItem = ({ item }: { item: ISection }) => {
	const { title, items, id } = item;
	return (
		<section className="section" id={id}>
			<motion.div className="section-item">
				<h2 id={id} className="section-item__title">
					{title}
				</h2>
				<hr className="section-item__hr" />
				<div className="cards-container">
					{items?.map((item) => (
						<Card key={item.id} data={item} />
						// <CardPlaceholder key={item.id} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

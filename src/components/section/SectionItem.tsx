import { motion } from "framer-motion";

import { Card } from "@components/cards/Card";
import { ISection } from "@/interfaces";

export const SectionItem = ({ item }: { item: ISection }) => {
	const { title, items, id } = item;

	return (
		<section className="section" id={id}>
			<motion.div className="section-item">
				<motion.h2
					id={id}
					className="section-item__title"
					initial={{ x: 10, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					{title}
				</motion.h2>
				<motion.hr
					className="section-item__hr"
					initial={{ x: -20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				/>
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

import { motion } from "framer-motion";

import { Card } from "@components/cards/Card";
import { ISection } from "@/interfaces";

export const SectionItem = ({ item }: { item: ISection }) => {
	const { title, items, id } = item;
	return (
		<section className="section" id={id}>
			<motion.div className="section-item" viewport={{ once: true }}>
				<motion.h2
					id={id}
					className="section-item__title"
					initial={{ x: -200 }}
					viewport={{ once: true }}
					whileInView={{ x: 0 }}
					transition={{ duration: 1 }}
				>
					{title}
				</motion.h2>
				<motion.hr
					className="section-item__hr"
					initial={{ x: 200 }}
					whileInView={{ x: 0 }}
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

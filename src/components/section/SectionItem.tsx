import { motion } from "framer-motion";

import { Card } from "@/components/section/card/Card";
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
						<motion.div
							key={item.id}
							initial={{ y: 50, filter: "blur(10px)" }}
							viewport={{ once: true }}
							whileInView={{ y: 0, filter: "blur(0px)" }}
							transition={{ duration: 1, ease: "easeInOut" }}
						>
							<Card data={item} />
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

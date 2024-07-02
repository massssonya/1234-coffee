import { motion } from "framer-motion";

import Card from "./Card";
import { ISection } from "../interfaces";

export function SectionItem({ data }: { data: ISection }) {
	return (
		<section className="section" id={data.id}>
			<motion.div className="section-item">
				<h2 id={data.id} className="section-item__title">
					{data.title}
				</h2>
				<hr className="section-item__hr" />
				<div className="cards-container">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</motion.div>
		</section>
	);
}

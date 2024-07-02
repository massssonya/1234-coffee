import { useEffect } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

export function SectionItem({
	data,
	activeSection,
	setActiveSection,
	pageHeight = 100,
	refs
}) {
	const observerMargin = Math.floor(pageHeight / 2);

	useEffect(() => {
		const observerConfig = {
			rootMargin: `0px 0px -${pageHeight * 0.85}px 0px`,
			threshold: 1
		};

		const handleIntersection = async function (entries) {
			await entries.forEach((entry) => {
				if (entry.target.id != activeSection && entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};
		const observer = new IntersectionObserver(
			handleIntersection,
			observerConfig
		);
		observer.observe(refs[data.id].current);
		return () => observer.disconnect();
	}, [activeSection, setActiveSection, observerMargin, refs, data, pageHeight]);

	return (
		<section className="section">
			<motion.div className="section-item">
				<h2 ref={refs[data.id]} id={data.id} className="section-item__title">
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

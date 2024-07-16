import { CardPlaceholder } from "../skeleton/CardPlaceholder";
import { PLACEHOLDER_ITEMS as items } from "@constants/placeholder.data";

export const SectionItemPlaceholder = () => {
	return (
		<section className="section animate-pulse">
			<div className="section-item">
				<div className="mt-16 h-6 w-[clamp(50vw,3vw,100vw)] rounded-full bg-placeholder dark:bg-dark-placeholder"></div>

				<hr className="section-item__hr bg-placeholder dark:bg-dark-placeholder" />
				<div className="cards-container">
					{items?.map((item) => (
						<CardPlaceholder key={item.id} />
					))}
				</div>
			</div>
		</section>
	);
};

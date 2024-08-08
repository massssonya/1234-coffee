import { Coffee } from "lucide-react";
import { Link } from "react-scroll";

export const CartEmpty = ({
	setActiveSection,
	closeCart
}: {
	setActiveSection: (section: string) => void;
	closeCart: () => void;
}) => {
	const scrollToSection = () => {
		setActiveSection("coffee_id");
		return closeCart();
	};
	return (
		<div className="flex flex-col items-center justify-center h-80 bg-slate-100 dark:bg-slate-800 p-10">
			<h1 className="text-3xl text-slate-800 font-bold mb-4 dark:text-gray-200">
				Здесь пока пусто
			</h1>
			<h3 className="text-lg text-slate-700 mb-4 dark:text-slate-400">
				Может быть{" "}
				<Link
					to="coffee_id"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={scrollToSection}
					className="cursor-pointer hover:text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-500"
				>
					чашечку кофе
				</Link>
				?
			</h3>
			<Coffee size={64} className="text-amber-500" />
		</div>
	);
};

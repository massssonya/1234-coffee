import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button/Button";

export const BurgerMenu = () => {
	return (
		<Button
			className="button menu border border-black"
			onClick={() => {}}
		>
			<span className="sr-only">Open main menu</span>
			<MenuIcon color="black" size={20}/>
		</Button>
	);
};

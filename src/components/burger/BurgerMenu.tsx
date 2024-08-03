import { MenuIcon } from "lucide-react";
import { Button } from "@components/ui/button/Button";

export const BurgerMenu = () => {
	return (
		<Button className="button menu border" onClick={() => {}}>
			<span className="sr-only">Open main menu</span>
			<MenuIcon color="black" size={20} />
		</Button>
	);
};

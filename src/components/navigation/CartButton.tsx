import { useContext } from "react";

import { Button } from "../ui/button/Button";
import { Indicator } from "../ui/Indicator";

import { CartContext } from "@/hooks/context/cart/CartContext";
import { useTypedSelector } from "@/hooks/useTypedSelector";

import { ShoppingCart } from "lucide-react";

export const CartButton = () => {
	const { setIsOpen } = useContext(CartContext);
	const cart = useTypedSelector((state) => state.cart);

	return (
		<Button onClick={setIsOpen} className="button cart relative">
			<ShoppingCart color="white" size={20} />
			{cart.length > 0 && <Indicator>{cart.length}</Indicator>}
		</Button>
	);
};

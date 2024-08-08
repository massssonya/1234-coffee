import { useTypedSelector } from "@hooks/useTypedSelector";
import { ICartItem } from "@/store/types";
import { Button } from "@components/ui/button/Button";
import { CartCard } from "./card/CartCard";
import { useActions } from "@hooks/useActions";
import "./Cart.css";
import { useMemo } from "react";
import { CartEmpty } from "./CartEmpty";

export const CartForm = ({
	setActiveSection,
	closeCart
}: {
	setActiveSection: (section: string) => void;
	closeCart: () => void;
}) => {
	const { items, totalPrice } = useTypedSelector((state) => state.cart);
	const { addItem, removeItem, removeOneItem } = useActions();

	const handleAddItem = (item: ICartItem) => {
		addItem(item);
	};

	const handleRemoveItem = (id: string) => {
		removeItem(id);
	};

	const handleRemoveOneItem = (id: string) => {
		removeOneItem(id);
	};

	const cards = useMemo(() => {
		return items.map((item) => (
			<CartCard
				key={item.id}
				data={item}
				onAdd={() => handleAddItem(item)}
				onRemoveOne={() => handleRemoveOneItem(item.id)}
				onRemove={() => handleRemoveItem(item.id)}
			/>
		));
	}, [items]);

	if (items.length === 0)
		return (
			<CartEmpty setActiveSection={setActiveSection} closeCart={closeCart} />
		);

	return (
		<form className="cart-form">
			<div className="cart-cards">{cards}</div>

			<div className="cart-footer">
				<div className="cart-footer__total">
					К оплате{" "}
					<span className="font-bold dark:text-gray-100">
						{totalPrice} руб.
					</span>
				</div>

				<Button
					type="submit"
					className="button submit w-full text-xl"
					onClick={() => {}}
				>
					Перейти к оплате
				</Button>
			</div>
		</form>
	);
};

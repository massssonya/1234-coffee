import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button } from "@components/ui/button/Button";
import { totalPrice } from "@/utils";
import { CartCard } from "./CartCard";

export const CartForm = () => {
	const cart = useTypedSelector((state) => state.cart);

	if (cart.length === 0) return <h1>Ваша корзина пуста</h1>;

	return (
		<form className="cart-form">
			<div className="cart-cards">
				{cart.map((item) => (
					<CartCard key={item.id} data={item} />
				))}
			</div>

			<div className="cart-footer">
				<div className="cart-footer__total">
					К оплате{" "}
					<span className="font-bold dark:text-gray-100">
						{totalPrice(cart)} руб.
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

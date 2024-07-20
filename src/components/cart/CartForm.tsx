import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Button } from "@components/ui/button/Button";
import { totalPrice } from "@/utils";

export const CartForm = () => {
	const cart = useTypedSelector((state) => state.cart);

	if (cart.length === 0) return <h1>Ваша корзина пуста</h1>;

	return (
		<form className="w-full">
			<div className="mb-5">
				{cart.map((item) => (
					<div key={item.id} className="mb-5">
						{item.name} Количество: {item.quantity}
					</div>
				))}
			</div>

			<div className="mb-5">Общая сумма: {totalPrice(cart)} руб.</div>

			<Button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={() => {}}
			>
				Перейти к оплате
			</Button>
		</form>
	);
};

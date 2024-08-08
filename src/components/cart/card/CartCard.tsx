import { ICartItem } from "@/store/types";

export const CartCard = ({
	data,
	onAdd,
	onRemoveOne,
	onRemove
}: {
	data: ICartItem;
	onAdd: () => void;
	onRemoveOne: () => void;
	onRemove: () => void;
}) => {
	const { name, price, quantity } = data;

	const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onAdd();
	};

	const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onRemoveOne();
	};
	return (
		<div className="mb-3 flex items-center bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 ">
			<div className="flex flex-row w-full justify-between items-center p-4 text-gray-900 dark:text-gray-100">
				<h5 className="text-xl font-bold">{name}</h5>

				<button onClick={handleIncrement}>+</button>
				<span>{quantity}</span>
				<button onClick={handleDecrement}>-</button>

				<button
					type="button"
					className="font-medium text-red-600 hover:underline dark:text-red-500"
					onClick={onRemove}
				>
					Удалить
				</button>

				<p className="font-normal text-gray-700 dark:text-gray-300 align-right">
					{price} руб.
				</p>
			</div>
		</div>
	);
};

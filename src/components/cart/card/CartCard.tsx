import { ICartItem } from "@/store/food/food.types";
import { NumberInput } from "../../ui/input/NumberInput";
import { useActions } from "@/hooks/useActions";

export const CartCard = ({ data }: { data: ICartItem }) => {
	const { addItem, removeItem } = useActions();

	const handleIncrement = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		addItem({ ...data, quantity: 1 });
	};
	const handleDecrement = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		removeItem({ ...data, quantity: 1 });
	};
	return (
		<div className="mb-3 flex items-center bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 ">
			<div className="flex flex-row w-full justify-between items-center p-4 text-gray-900 dark:text-gray-100">
				<h5 className="text-xl font-bold">{data.name}</h5>
				<NumberInput
					value={data.quantity}
					increment={handleIncrement}
					decrement={handleDecrement}
					id={data.id}
				/>

				<p className="font-normal text-gray-700 dark:text-gray-300 align-right">
					{data.price} руб.
				</p>
			</div>
		</div>
	);
};

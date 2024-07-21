import { ICartItem } from "@/store/food/food.types";

export const CartCard = ({ data }: { data: ICartItem }) => {
	return (
		<div className="mb-3 flex items-center bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 ">
			<div className="flex flex-row w-full justify-between items-center p-4 text-gray-900 dark:text-gray-100">
				<h5 className="text-xl font-bold">
					{data.name}
					<span className="ml-2 text-base font-bold text-gray-900 dark:text-gray-200">x{data.quantity}</span>
				</h5>

				<p className="font-normal text-gray-700 dark:text-gray-300 align-right">
					{data.price} руб.
				</p>
			</div>
		</div>
	);
};

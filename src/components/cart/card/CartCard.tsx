import { ICartItem } from "@/store/types";
import { Trash2, Minus, Plus } from "lucide-react";

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
	const { name, price, quantity, img, description } = data;

	const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onAdd();
	};

	const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onRemoveOne();
	};
	return (
		<div className="relative mb-3 sm:py-1 sm:px-1 flex items-center rounded-lg shadow-md  text-black dark:text-white bg-gradient-to-br from-[#A6E6E0] via-10% via-[#c7f4f0] to-[#FFFFFE] dark:bg-gradient-to-br dark:from-[#242424] dark:via-[#3A3A3A] dark:to-[#303030]">
			<div className="flex flex-row w-full justify-between items-center p-2">
				<div className="flex flex-row items-center w-full">
					<img
						src={img}
						alt=""
						className="sm:w-28 sm:h-28 w-20 h-20 rounded-full object-cover"
					/>
					<div className="ml-3">
						<h5 className="sm:text-xl text-base font-bold mb-1 ">{name}</h5>
						<p className="sm:text-xs max-w-full text-[clamp(6px,2.5vw,12px)] font-normal ">
							{description}
						</p>
					</div>
				</div>
				<div className="flex flex-row items-center ml-3">
					<div className="flex flex-col items-center gap-3">
						<button
							className="sm:h-10 sm:w-10 h-8 w-8 hover:bg-[#FDD2A8] rounded-md flex items-center justify-center text-center transition-all dark:hover:bg-teal-500"
							onClick={handleIncrement}
						>
							<Plus />
						</button>
						<span className="sm:h-10 sm:w-10 h-8 w-8 bg-[#FDD2A8] rounded-md flex items-center justify-center text-center dark:bg-teal-500">
							{quantity}
						</span>
						<button
							className="sm:h-10 sm:w-10 h-8 w-8 hover:bg-[#FDD2A8] rounded-md flex items-center justify-center text-center transition-all dark:hover:bg-teal-500"
							onClick={handleDecrement}
						>
							<Minus />
						</button>
					</div>

					<button
						type="button"
						className="ml-3 font-medium text-black rounded-md hover:underline dark:text-white sm:h-10 sm:w-10 h-8 w-8 flex items-center justify-center dark:hover:bg-teal-500"
						onClick={onRemove}
					>
						<Trash2 />
					</button>
				</div>
			</div>
			<div className="absolute  sm:-bottom-5 -bottom-4 sm:left-4 left-3 bg-white sm:w-28 w-20 py-1 rounded-md flex justify-center items-center shadow-md dark:bg-gray-700 dark:shadow-gray-700/50">
				<span className="text-[clamp(16px,2.5vw,18px)] font-medium text-gray-900 dark:text-gray-100">
					{price} р.
				</span>
			</div>
		</div>
	);
};

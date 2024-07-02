import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "/default.webp";

const Card = () => {
	const [isLike, setIsLike] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const handleLike = (e) => {
		e.stopPropagation();
		setIsLike((prev) => !prev);
	};
	const handleOpen = (e) => {
		e.stopPropagation();
		setIsOpen((prev) => !prev);
	};
	return (
		<div
			className="bg-white rounded-lg select-none mb-4 shadow-md hover:shadow-xl cursor-pointer"
			onClick={(e) => handleOpen(e)}
		>
			<a href="#" onClick={e => e.preventDefault()}>
				<img className="max-w-full" src={img} alt="" />
			</a>
			<div className="px-2 py-4 border-x border-b border-teal-700 rounded-b-lg select-none">
				<a href="#" onClick={e => e.preventDefault()}>
					<h3 className="mb-2 sm:text-2xl text-xl font-bold tracking-tight text-teal-700 dark:text-white">
						Сырники
					</h3>
				</a>
				<p></p>
				{/* Table */}
				<div className="w-full my-3 flex justify-center">
					<table className="sm:text-xs text-[10px] text-center text-gray-500 dark:text-gray-400 w-full ">
						<thead className="text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400 ">
							<tr className="">
								<th scope="col" className="px-3  border-r border-teal-700">
									Белки
								</th>
								<th scope="col" className="px-3  border-r border-teal-700">
									Жиры
								</th>
								<th scope="col" className="px-3  border-r border-teal-700">
									Углеводы
								</th>
								<th scope="col" className="px-3 ">
									Калории
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
								<td
									scope="row"
									className="px-3 whitespace-nowrap dark:text-white border-r border-teal-700"
								>
									29.5 г
								</td>
								<td className="px-3 border-r border-teal-700">21.3 г</td>
								<td className="px-3 border-r border-teal-700">54.0 г</td>
								<td className="px-3">525.8 ккал</td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* Description */}
				<AnimatePresence>
					{isOpen && (
						<div className="relative">
							<motion.div
								className="mb-2 max-h-36 overflow-y-auto no-scrollbar"
								initial={{ height: 0, filter: "blur(5px)" }}
								animate={{ height: "auto", filter: "blur(0px)" }}
								transition={{ duration: 0.3 }}
								exit={{ height: 0, filter: "blur(5px)" }}
							>
								<p>
									Ингредиенты: творог; манная крупа; соль; сахар; желток;
									растительное масло; ванильный сахар; сметана; вишневый соус:
									вишневый сок; кукурузный крахмал; сахар.
								</p>
								<p>
									Ингредиенты: творог; манная крупа; соль; сахар; желток;
									растительное масло; ванильный сахар; сметана; вишневый соус:
									вишневый сок; кукурузный крахмал; сахар.
								</p>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
				{/*	Button */}
				{/* <button
          type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          В корзину
        </button> */}
				<div className="flex justify-between items-center">
					<p className="text-xl">380,00 Р</p>
					<motion.span
						className=""
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.1 }}
					>
						<svg
							onClick={(e) => handleLike(e)}
							className="h-8 w-8 text-red-500 cursor-pointer"
							fill={isLike ? "rgb(239 68 68)" : "none"}
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</motion.span>
				</div>
			</div>
		</div>
	);
};

export default Card;

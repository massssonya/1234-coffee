import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import img from "/default.webp";
import Like from "../../assets/icons/Like";
import Table from "../cards/Table";
import { ISectionItem } from "../../interfaces";

const Card = ({ data }: { data: ISectionItem }) => {
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
			className={
				`card` +
				(data.isDisabled
					? " card-disabled"
					: "" + (data.description ? " cursor-pointer" : ""))
			}
			onClick={data.description ? (e) => handleOpen(e) : () => {}}
		>
			<img className="card-img" src={data.img} alt={data.name} />
			<div className="card-container">
				<div className="card-info">
					<h3 className="card-title">{data.name}</h3>

					{/* Table */}
					<div className="card-table">
						{data.properties && <Table data={data.properties} id={data.id} />}
					</div>
					{/* Description */}
					<AnimatePresence>
						{isOpen && (
							<div className="relative">
								<motion.div
									className="card-description"
									initial={{ height: 0, filter: "blur(5px)" }}
									animate={{ height: "auto", filter: "blur(0px)" }}
									transition={{ duration: 0.3 }}
									exit={{ height: 0, filter: "blur(5px)" }}
								>
									<p>{data.description}</p>
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
					<div className="card-footer">
						<p className="card-price">{data.price} Р</p>
						{/*	Icon Like */}
						<motion.span
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.1 }}
							className="w-10 flex justify-center"
						>
							<Like isLike={isLike} handleLike={handleLike} />
						</motion.span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

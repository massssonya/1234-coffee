import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { CardLike } from "./CardLike";
import { CardTable } from "./CardTable";
import { CardDescription } from "../cards/CardDescription";
import { ISectionItem } from "../../interfaces";
import { useActions } from "../../hooks/useActions";
import defaultImg from "../../assets/default.webp";

export const Card = ({
	data,
	isFavorite = false
}: {
	data: ISectionItem;
	isFavorite?: boolean;
}) => {
	const [isLike, setIsLike] = useState(isFavorite);
	const [isOpen, setIsOpen] = useState(false);
	const { toggleFavorite } = useActions();

	const handleLike = (e) => {
		e.stopPropagation();
		toggleFavorite(data);
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
			{/*	Img */}
			<img
				className="card-img"
				src={data.img}
				alt={data.name}
				onError={(e) => (e.currentTarget.src = defaultImg)}
			/>
			{/*	Not available */}
			{/* {data.isDisabled && (
				<div className="card-not-available">Нет в наличии</div>
			)} */}

			<div className="card-container">
				<div className="card-info">
					<h3 className="card-title">{data.name}</h3>

					{/* Table */}
					<div className="card-table">
						{data.properties && (
							<CardTable data={data.properties} id={data.id} />
						)}
					</div>
					{/* Description */}
					<AnimatePresence>
						{isOpen && <CardDescription description={data.description} />}
					</AnimatePresence>
					{/*	Button */}
					{/* <Button onClick={() => window.scrollTo(0, 0)}>В корзину</Button> */}
					<div className="card-footer">
						{/*	Price */}
						<p className="card-price">{data.price} Р</p>
						{/*	Icon Like */}
						<CardLike isLike={isLike} handleClick={handleLike} />
					</div>
				</div>
			</div>
		</div>
	);
};

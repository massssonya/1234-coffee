import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import "./Card.css";

import { CardHeader } from "./CardHeader";
import { CardImg } from "./CardImg";
import { CardLike } from "./CardLike";
import { CardTable } from "./CardTable";
import { CardDescription } from "./CardDescription";

import { ISectionItem } from "@/interfaces";
import { useActions } from "@hooks/useActions";
import {
	info,
	warning
} from "@components/alerting_service/services/alerting_service";
import { Button } from "@components/ui/button/Button";

export const Card = ({ data }: { data: ISectionItem }) => {
	const [isLike, setIsLike] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { addItem } = useActions();

	const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
		e.stopPropagation();
		if (isLike) {
			warning(`Товар ${data.name} удален из избранного`, 3);
		} else {
			info(`Товар ${data.name} добавлен в избранное`, 3);
		}
		setIsLike((prev) => !prev);
	};
	const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		setIsOpen((prev) => !prev);
	};

	const handleAddCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		addItem(data);
		info(`Товар ${data.name} добавлен в корзину`, 3);
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
			<CardImg img={data.img} name={data.name} />
			{/*	Icon Like */}
			<CardLike isLike={isLike} handleClick={handleLike} />
			<div className="card-container">
				<div className="card-info">
					<CardHeader name={data.name} isDisabled={data.isDisabled} />
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
						{/*	Button */}
						{!data.isDisabled && (
							<Button onClick={(e) => handleAddCart(e)}>В корзину</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

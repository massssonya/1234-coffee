import defaultImg from "@assets/default.webp";

export const CardImg = ({ img, name }: { img: string | undefined; name: string }) => {
	const handleErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.src = defaultImg;
		const newElement = document.createElement("div");
		newElement.className = "absolute w-full h-full bg-black/10 top-0 left-0";
		e.currentTarget.parentElement?.append(newElement);
	};

	return (
		<div className="card-img relative">
			<img src={img} alt={name} onError={(e) => handleErrorImg(e)} />
		</div>
	);
};

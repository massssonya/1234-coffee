import { Badge } from "../ui/badge/Badge";

export const CardHeader = ({
	name,
	isDisabled
}: {
	name: string;
	isDisabled?: boolean;
}) => {
	return (
		<div className="card-header">
			<h3 className="card-title">{name}</h3>
			{isDisabled ? (
				<Badge color="error">Нет в наличии</Badge>
			) : (
				<Badge color="success">Есть в наличии</Badge>
			)}
		</div>
	);
};

import { IProperties } from "../../interfaces";

const Properties = {
	proteins: {
		name: "Белки",
		unit: "г"
	},
	fats: {
		name: "Жиры",
		unit: "г"
	},
	carbohydrates: {
		name: "Углеводы",
		unit: "г"
	},
	calories: {
		name: "Калории",
		unit: "ккал"
	}
};
const Table = ({ data, id }: { data: IProperties | undefined, id: string }) => {
	return (
		<table className="table">
			<thead className="table-thead">
				<tr className="">
					{data &&
						Object.keys(data).map((item) => (
							<th key={`${id}_${item}`} scope="col" className="table-th">
								{Properties[item as keyof typeof Properties].name}
							</th>
						))}
				</tr>
			</thead>
			<tbody>
				<tr className="table-tr">
					{data &&
						Object.entries(data).map((item) => (
							<td key={`${id}_${item}_value`} className="table-td">
								{item[1]} {Properties[item[0] as keyof typeof Properties].unit}
							</td>
						))}
				</tr>
			</tbody>
		</table>
	);
};

export default Table;

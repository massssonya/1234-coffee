import { IProperties } from "@/interfaces";
import { NUTRIENTS } from "@constants/Nutrients";

export const CardTable = ({
	data,
	id
}: {
	data: IProperties | undefined;
	id: string;
}) => {
	return (
		<table className="table">
			<thead className="table-thead">
				<tr className="">
					{data &&
						Object.keys(data).map((item) => (
							<th key={`${id}_${item}`} scope="col" className="table-th">
								{NUTRIENTS[item as keyof typeof NUTRIENTS].name}
							</th>
						))}
				</tr>
			</thead>
			<tbody>
				<tr className="table-tr">
					{data &&
						Object.entries(data).map((item) => (
							<td key={`${id}_${item}_value`} className="table-td">
								{item[1]} {NUTRIENTS[item[0] as keyof typeof NUTRIENTS].unit}
							</td>
						))}
				</tr>
			</tbody>
		</table>
	);
};

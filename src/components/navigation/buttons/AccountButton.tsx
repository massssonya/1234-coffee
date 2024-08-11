import {User} from "lucide-react"

export const AccountButton = () => {
	return (
		<button
			type="button"
			className="button submit"
		>
			<User color="white" size={20} />
			<span className="sr-only">Icon description</span>
		</button>
	);
};

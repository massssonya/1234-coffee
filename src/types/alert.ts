import { TColors } from "./colors";

export interface IAlert {
	id: number;
	status: TColors;
	message: string;
	timeout: number;
}

type TPosition = "left" | "right";

export interface ISocialButton<T> {
	position: TPosition;
	array: T[];
}

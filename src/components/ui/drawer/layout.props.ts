type TPosition = "top" | "right" | "bottom" | "left";

export interface IDrawerLayout {
	position: TPosition;
	children: React.ReactNode;
	isOpen: boolean;
	// animation?: { initial?: object; animate?: object; exit?: object, transition?: object };
}

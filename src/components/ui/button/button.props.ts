type TButton = "button" | "submit" | "reset";

export interface IButton {
	className?: string;
	children: React.ReactNode;
	onClick: (() => void) | ((e) => void);
	type?: TButton;
}

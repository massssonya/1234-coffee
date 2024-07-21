export interface IDrawer {
	children: React.ReactNode;
	className?: string;
	title?: string;
	onClose: () => void;
}

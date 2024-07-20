import { Button } from "../button/Button";

export const Drawer = ({
	children,
	className,
	title,
	onClose
}: {
	children: React.ReactNode;
	className?: string;
	title?: string;
	onClose: () => void;
}) => {
	return (
		<div className={`drawer ${className}`} tabIndex={-1}>
			<h5 className="drawer-header">{title}</h5>
			<hr className="my-4" />
			<Button
				className="drawer-btn__close"
				onClick={onClose}
			>
				<svg
					className="w-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
				<span className="sr-only">Close menu</span>
			</Button>
			{children}
		</div>
	);
};

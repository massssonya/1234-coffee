export const Button = ({
	className = "button",
	children,
	onClick
}: {
	className?: string;
	children: React.ReactNode;
	onClick: () => void;
}): JSX.Element => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

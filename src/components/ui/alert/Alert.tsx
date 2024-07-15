import { motion } from "framer-motion";
import { IAlertProps } from "./alert.props";
import { close } from "../../alerting_service/services/alerting_service";
import { useEffect } from "react";
export const Alert = (props: IAlertProps): JSX.Element => {
	useEffect(() => {
		if (props.timeout > 0) {
			const timer = setTimeout(() => {
				close(props.id);
			}, props.timeout * 1_000);
			return () => clearTimeout(timer);
		}
	}, [props.timeout, props.id]);
	return (
		<motion.span
			className={`alert ${props.status}`}
			role="alert"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, x: 100 }}
			transition={{ duration: 0.2 }}
		>
			{props.message}
			<button
				type="button"
				className={`alert-button ${props.status}`}
				onClick={() => close(props.id)}
			>
				<svg
					className="w-2 h-2"
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
			</button>
		</motion.span>
	);
};
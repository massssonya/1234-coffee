import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import { Alert } from "../ui/alert/Alert";
import { IAlertingServiceProps } from "./alerting_service.props";
import { IAlert } from "@my_types/alert";
import { onAlert, onClosed } from "./services/alerting_service";

export const AlertingService = (props: IAlertingServiceProps): JSX.Element => {
	const [alerts, setAlerts] = useState<IAlert[]>([]);

	const children = alerts.map((alert) => {
		return <Alert key={alert.id} {...alert} />;
	});

	useEffect(() => {
		const onAlertSubscription$ = onAlert().subscribe((alert) => {
			setAlerts([...alerts, alert]);
		});
		const onClosedSubscription$ = onClosed().subscribe((id) => {
			setAlerts((alerts) => alerts.filter((item) => item.id !== id));
		});

		return () => {
			onAlertSubscription$.unsubscribe();
			onClosedSubscription$.unsubscribe();
		};
	}, [alerts]);
	return (
		<div className={`alerting-service ${props.horizontal} ${props.vertical}`}>
			<AnimatePresence>{children}</AnimatePresence>
		</div>
	);
};

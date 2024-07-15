import { useEffect, useState } from "react";
import { Alert } from "../ui/alert/Alert";
import { AlertLayout } from "../alerting_service/AlertingService";

const NotificationComponent = ({ notifications }) => {
	const [visibleNotifications, setVisibleNotifications] = useState([
		...notifications
	]);

	useEffect(() => {
		setVisibleNotifications([...notifications]);
	}, [notifications]);

	return (
		<AlertLayout>
			{visibleNotifications.map((item) => (
				<Alert key={item.id} {...item} />
			))}
		</AlertLayout>
	);
};

export default NotificationComponent;

import "./index.css";
import Section from "./components/section/Section";
// import { useTypedSelector } from "./hooks/useTypedSelector";
// import NotificationComponent from "./components/notifications/NotificationComponent";
import { AlertingService } from "./components/alerting_service/AlertingService";
// import { Button } from "./components/ui/Button";
// import { success } from "./components/alerting_service/services/alerting_service";

export default function App() {
	// const { favorite } = useTypedSelector((state) => state);

	return (
		<>
			<Section />
			{/* <NotificationComponent notifications={favorite} /> */}
			<AlertingService horizontal="right" vertical="bottom" />
			{/* <Button onClick={() => success("test", 3)}>Alert</Button> */}
		</>
	);
}

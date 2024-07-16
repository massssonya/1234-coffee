import "./index.css";
import Section from "@components/section/Section";
// import { useTypedSelector } from "./hooks/useTypedSelector";
import { AlertingService } from "@components/alerting_service/AlertingService";

export default function App() {
	// const { favorite } = useTypedSelector((state) => state);

	return (
		<>
			<Section />
			<AlertingService horizontal="right" vertical="bottom" />
		</>
	);
}

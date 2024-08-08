import { useEffect } from "react";
import "./index.css";
import { Outlet } from "react-router-dom";

export default function App() {

	useEffect(() => {
		// const section = document.getElementById("section");
		// if (section) {
		// 	section.style.pointerEvents = "auto";
		// }
		const handleReload = () => {
			window.scrollTo({
				top: 0
			});
		};
		window.addEventListener("beforeunload", handleReload);
		return () => {
			window.removeEventListener("beforeunload", handleReload);
		};
	}, []);

	return (
		<div className="max-w-[1024px] mx-auto">
			<Outlet />
		</div>
	);
}

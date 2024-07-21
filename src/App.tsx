import { useEffect } from "react";

import "./index.css";
import CartProvider from "@hooks/context/cart/CartProvider";
import Section from "@components/section/Section";
import { Footer } from "@components/footer/Footer";
import { AlertingService } from "@components/alerting_service/AlertingService";
import { Cart } from "@components/cart/Cart";

export default function App() {
	useEffect(() => {
		const section = document.getElementById("section");
		if (section) {
			section.style.pointerEvents = "auto";
		}
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
		<CartProvider>
			<Section />
			<Cart />
			<AlertingService horizontal="right" vertical="bottom" />
			<Footer />
		</CartProvider>
	);
}

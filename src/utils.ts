import { ICartItem, ISection } from "./store/food/food.types";

export function sortItems<T>(items: T[], compareFn: (a: T, b: T) => number) {
	return items
		.slice()
		.sort((a, b) => compareFn(a, b))
		.map((item) => item);
}

export function formatPhone(phone: string) {
	switch (phone[0]) {
		case "+":
			return `+7 ${phone.slice(2, 5)} ${phone.slice(5, 8)}-${phone.slice(
				8,
				10
			)}-${phone.slice(10, 12)}`;
		case "8":
			return `+7 ${phone.slice(1, 4)} ${phone.slice(4, 7)}-${phone.slice(
				7,
				9
			)}-${phone.slice(9, 11)}`;
		default:
			return phone;
	}
}

export function totalPrice(items: ICartItem[]) {
	return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

export function getSectionNavigation(
	items: ISection[]
): { id: string; title: string }[] {
	const nav = items?.map((item) => ({
		id: item.id,
		title: item.title
	}));

	return nav;
}

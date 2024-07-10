export function sortItems<T>(items: T[], compareFn: (a: T, b: T) => number) {
	return items
		.slice()
		.sort((a, b) => compareFn(a, b))
		.map((item) => item);
}

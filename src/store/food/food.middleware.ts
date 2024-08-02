export const timeoutMiddleware = () => (next) => (action) => {
	setTimeout(() => {
		const result = next(action);

		return result;
	}, 1000);
};

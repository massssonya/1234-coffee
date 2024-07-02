/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"main-color": "#ffffff",
				"main-dark-color": "#1e1b4b",
			}
		}
	},
	plugins: []
};

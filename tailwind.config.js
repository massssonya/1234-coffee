/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary": "#ffffff",
				"dark-primary": "#155e75",
			},
		}
	},
	plugins: []
};

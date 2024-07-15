/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ffffff",
				// "dark-primary": "#155e75",
				"dark-primary": "#ffffff",
				error: "#FD726A",
				"error-light": "#FFDEDD",

				success: "#44CB7F",
				"success-light": "#D4FFE7",

				warning: "#F39C12",
				"warning-light": "#FDEBD0",

				info: "#3498DB",
				"info-light": "#D6EAF8"
			}
		}
	},
	plugins: []
};

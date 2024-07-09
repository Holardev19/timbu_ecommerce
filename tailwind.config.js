/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lexend: ["Lexend", "sans-serif"],
			},

			screens: {
				xxs: "360px",
				xs: "400px",
				xl: "1278px",
			},
		},
	},
	plugins: [],
};

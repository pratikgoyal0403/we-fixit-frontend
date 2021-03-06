const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "480px",
			...defaultTheme.screens,
		},
		extend: {
			spacing: {
				"screen-90": "90vw",
			},
			minWidth: {
				36: "8rem",
			},
			colors: {
				primary: "#38CC77",
				secondary: "#F9F8FD",
				opaque: "rgb(0, 0, 0, .4)",
				justWhite: "rgb(253, 253, 253)",
				justPrimary: "#daf6e6",
				danger: "rgba(239, 68, 68)",
			},
			backgroundImage: {
				hero: "url('/images/hero.png')",
				"hero-2":
					"linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .7)), url('/images/hero-2.webp')",
			},
			gridTemplateRows: {
				layout: "1fr auto",
			},
			gridTemplateColumns: {
				"admin-layout": "270px 1fr",
			},
		},
	},
	fontFamily: {
		sans: ["sans-serif"],
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

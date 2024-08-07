import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			gray: {
				200: '#E0E0E0',
				400: '#A3A3A3',
				500: '#858585',
				800: '#333333'
			}
		},
		fontFamily: {
			sans: ['Rethink Sans', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};

import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			gray: colors.neutral
		},
		fontFamily: {
			sans: ['Gabarito', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			fontSize: {
				xs: ['0.75rem', '1rem'],
				sm: ['0.875rem', '1.125rem'],
				base: ['1rem', '1.3125rem'],
				lg: ['1.125rem', '1.5rem']
			}
		}
	},
	plugins: []
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
	colors: {
        'list-marker': '#FFEE58',
      },
      fontSize: {
        '2xl': '1.5rem',
      },
      brightness: {
        '75': '.75',
      },
	fontFamily: {
		'sans': ['Inter', 'ui-sans-serif', 'system-ui']
	},
    },
  },
  plugins: [],
}


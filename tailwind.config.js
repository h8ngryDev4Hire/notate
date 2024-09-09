
module.exports = {
	important: true,
	mode: 'jit',
  	content: [
		"./src/**/*.{html,js,jsx}", 
		"./src/**/*.css",
		"./src/**/*.json"
	],
  	theme: {
  		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite'
			},

			backgroundImage: {
				'dark-wood': "url('./Backgrounds/wood-bg.jpg')",
    				'cork-board': "url('./Backgrounds/note-board-bg.jpg')",
    				'note-paper': "url('./Backgrounds/note-paper-bg.jpg')",
    				'marble-chess-board': "url('./Backgrounds/marble-chess-bg.jpeg')",
			},

			keyframes: {
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
  	      		colors: {
  	      			'list-marker': '#FFEE58',
  	    		},
  	    		fontSize: {
  	      			'2xl': '1.5rem',
  	    		},
  	    		brightness: {
  	      			'75': '.75',
  	 		},

  	  	},
  	},
	variants: {
		extend: {
			animation: ['hover', 'focus']	
		}
	},

  	plugins: [
  		require('tailwind-scrollbar')
  	],
	
	safelist: [
	] 
}


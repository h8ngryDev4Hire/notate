import React from 'react';


const themes = {
	darkWood: {
		background: 'dark-wood-bg',
		text: {
			h1: "text-white",
			h2: "text-gray-200",
			h3: "text-gray-300",
			sub: "text-gray-400"
		},
		accent: {}
	},
	corkBoard: {
		background: 'cork-board-bg',
		text: {
			h1: "text-black",
			h2: "text-gray-800",
			h3: "text-gray-700",
			sub: "text-gray-600"
		},
	},
	marbleChessBoard: {
		background: 'marble-chess-board-bg',
		text: {
			h1: "text-red-400",
			h2: "text-red-500",
			h3: "text-red-600",
			sub: "text-red-600"
		},
	},
}


export default function useTheme(backgroundWallpaper) {

	return React.useMemo(()=>{
		return themes[backgroundWallpaper] || themes["darkWood"]
	},[backgroundWallpaper])
}




export const ConfigurationTemplate = {
	Notate: {
		search: {
			preferredEngine: {
				value: "perplexityai",
				description: "Sets your preferred Search Engine.",
				options: ["google", "bing", "duckduckgo", "yahoo", "baidu", "yandex", "ecosia", "perplexityai"],
				enabled: true
			},
			searchNotes: {
				value: "true",
				description: "Sets whether or not notes should be searched for when searching in the search bar.",
				options: ["true", "false"],
				enabled: true
			}
		},
		page: {
			pageOpenBehavior: {
				value: "onNewTab",
				description: "Sets default page to open up when clicking the New Tab Button.",
				options: ["onNewTab", "onClickPopup", "false"],
				enabled: true
			},
			backgroundWallpaper: {
				value: "darkWood",
				description:"Sets wallpaper for Notate.",
				options: ["darkWood", "corkBoard", "marbleChessBoard", "notePaper"],
				enabled: true
			}
		},
		noteModal: {
			preferredColor: {
				value: "yellow",
				description: "Sets preferred color when creating new notes",
				options: ["red", "yellow", "blue", "green", "orange", "pink", "purple"],
				enabled: true
			}
		}
	},
	WebContent: {
		tools: {
		
		},
		behavior: {
			newNotePopup: {
				value: "true",
				description: "Sets whether the New Note Button shows when hovering the cursor in the corner of the page.",
				options: ["true", "false"],
				enabled: true
			}
		}
	}
}

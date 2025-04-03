import DatabaseAdapter from '@universal/Handlers/IdbHandler.js'


export default class Helper {
	constructor() {


		this.visual = {
			changeScrollState: async (bool) => {
				const bodyClasses = document.body.classList 
				const disabledClassName = "overflow-hidden"
				const classExists = bodyClasses.contains(disabledClassName)	
			
				const classRemover = (bool && classExists) ? bodyClasses.remove(disabledClassName) : null
				const classAdder = (!bool && !classExists) ? bodyClasses.add(disabledClassName) : null 
			},




			setBackgroundWallpaper: (database, target) => {
				if (target instanceof HTMLElement && database instanceof DatabaseAdapter) {
					const wallpaperConfiguration = database.inventory.USER_CONFIGURATION[0].Notate.page.backgroundWallpaper
					const configList = wallpaperConfiguration.options.map( option => convertCamelCaseToKebabCase(option) + "-bg" )
					const selectedWallpaper =  convertCamelCaseToKebabCase( wallpaperConfiguration.value ) + "-bg"
					const classes = Array.from(target.classList)
					const comparison = classes.filter(item => item.includes('-bg'));

					comparison.forEach(className => {
    						if (configList.some(configItem => className.includes(configItem))) {
        						target.classList.remove(className);
    						}
					});

					if (!target.classList.contains(selectedWallpaper)) {
    						target.classList.add(selectedWallpaper);
					}


				}
			}
 
		}
	}
}



const convertCamelCaseToKebabCase = (input) => {
	return input
        	.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        	.replace(/[\s_]+/g, '-')
		.toLowerCase() 
}

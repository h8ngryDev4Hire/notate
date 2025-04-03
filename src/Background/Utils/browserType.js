export const BROWSER_TYPE = getBrowserType()


function getBrowserType() {
	const result = (typeof browser === 'object') ?  "firefox" : "chrome"
	return result
}

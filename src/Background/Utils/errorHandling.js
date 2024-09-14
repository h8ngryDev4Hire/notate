export const NOTATE_DB = "notate"
export const ERROR_LOGGING_DB = "errorLogging"
export const USER_CONFIGURATION_DB = "userConfiguration"



/*
FUNCTION:
	
 */
export const generateErrorLog = async (error, context={}) => {
	if (!errorloggingdb || errorloggingdb?.inventory instanceof Promise || !errorloggingdb?.insertData) await initializeErrorLoggingDatabase()

	try {
		const errorLog = {
			timestamp: new Date().toISOString(),
			error: {
				name: error?.name,
				message: error?.message,
				stackTrace: error?.stack
			},
			context: {
				 ...context,
				url: chrome.runtime.getURL(''),
				extensionId: chrome.runtime.id,
				manifestVersion: chrome.runtime.getManifest()?.manifest_version

			}
		}

		await errorloggingdb.insertData(errorLog, "ERRORS")
	} catch (error) {

	}
}

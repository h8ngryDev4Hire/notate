import { ConfigurationTemplate } from "./ConfigurationTemplate.js";
import { mergeConfigurations, checkAndMergeConfig } from "./merge.js";

export default async function handleConfigurationDb(database, requestType) {
	if (database && requestType) {
    		switch (requestType) {
      			case 'setup': {
        			await setupUserConfiguration(database);
        			break;
      			}
      			case 'update': {
        			await configurationMergeCheck(database);
        			break;
      			}
      			default: {
      			}
    		}
	}
}

async function setupUserConfiguration(database) {
	try {
    		await database.insertData(ConfigurationTemplate, 'USER_CONFIGURATION');
  	} catch (error) {
    		console.error('Error in config DB setup:', error);
  	}
}

async function configurationMergeCheck(database) {
	try {
    		// Fetch the current configuration from the database
    		const currentConfig = database.inventory.USER_CONFIGURATION[0];

    		if (!currentConfig) {
     			// If no configuration exists, insert the template
			await database.insertData(ConfigurationTemplate, 'USER_CONFIGURATION');
      			return;
		}

    		// Check if a merge is needed
    		const mergedConfig = checkAndMergeConfig(currentConfig, ConfigurationTemplate);

    		if (mergedConfig) {
      			// A merge is needed, update the database
      			await database.insertData(mergedConfig, 'USER_CONFIGURATION');
    		}
	} catch (error) {
    		console.error('Error in config DB merge check:', error);
  	}
}

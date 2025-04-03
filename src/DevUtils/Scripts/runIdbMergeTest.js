import DatabaseAdapter from '@universal/Handlers/IdbHandler.js';
import { ConfigurationTemplate } from '@universal/Handlers/ConfigurationHandlers/ConfigurationTemplate.js';
import { mergeConfigurations, checkAndMergeConfig } from '@universal/Handlers/ConfigurationHandlers/merge.js';

export async function runIdbMergeScript() {
  try {
    // Initialize DatabaseAdapter
    const dbAdapter = new DatabaseAdapter('userConfiguration');
    await dbAdapter.connection;

    // Get existing configuration
    const existingConfig = dbAdapter.inventory.USER_CONFIGURATION[0];
    console.log('Existing configuration:', existingConfig);

    // Create a modified template with new flags and module
    const modifiedTemplate = JSON.parse(JSON.stringify(ConfigurationTemplate));
    modifiedTemplate.Notate.search.preferredEngine.options = [...modifiedTemplate.Notate.search.preferredEngine.options, 'newSearchEngine']

    modifiedTemplate.Notate.NewModule = {
      flag1: {
        value: "flag1Value",
        description: "First flag in new module",
        options: ["flag1Value", "otherValue"],
        enabled: true
      },
      flag2: {
        value: "flag2Value",
        description: "Second flag in new module",
        options: ["flag2Value", "differentValue"],
        enabled: false
      }
    };



    console.log('Modified template:', modifiedTemplate);

    // Perform merge
    const mergedConfig = mergeConfigurations(existingConfig, modifiedTemplate);
    console.log('Merged configuration:', mergedConfig);

    // Assertions
    console.assert(mergedConfig.Notate.search.preferredEngine.options.length === 9, "Available options should be 9, not 8.");
    console.assert(mergedConfig.Notate.NewModule.flag1.value === "flag1Value", "New module and flag should be added");
    console.assert(mergedConfig.Notate.NewModule.flag2.value === "flag2Value", "Second new flag should be added");

    // Check for changes
    const changes = checkAndMergeConfig(existingConfig, modifiedTemplate);
    console.assert(changes !== null, "Changes should be detected");



    console.log('Merge test completed successfully');
  } catch (error) {
    console.error('Error during merge test:', error);
  }
}



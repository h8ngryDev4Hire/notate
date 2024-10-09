// mergeTest.js

import { mergeConfigurations, checkAndMergeConfig } from '../../src/Universal/Handlers/ConfigurationHandlers/merge.js';

function runTests() {
  console.log("Running tests for mergeConfigurations and checkAndMergeConfig");

  // Test 1: Basic merge
  const existingConfig = {
    module1: {
      flag1: {
        value: "old",
        description: "Old description",
        options: ["old", "new"],
        enabled: true
      }
    }
  };

  const newTemplate = {
    module1: {
      flag1: {
        value: "new",
        description: "Updated description",
        options: ["old", "new", "newer"],
        enabled: false
      },
      flag2: {
        value: "new2",
        description: "New flag",
        options: ["new2"],
        enabled: true
      }
    },
    module2: {
      flag3: {
        value: "module2flag",
        description: "New module flag",
        options: ["module2flag"],
        enabled: true
      }
    }
  };

  const mergedResult = mergeConfigurations(existingConfig, newTemplate);
  console.assert(mergedResult.module1.flag1.value === "old", "Existing value should be preserved");
  console.assert(mergedResult.module1.flag1.description === "Updated description", "Description should be updated");
  console.assert(mergedResult.module1.flag1.options.length === 3, "Options should be updated");
  console.assert(mergedResult.module1.flag2.value === "new2", "New flag should be added");
  console.assert(mergedResult.module2.flag3.value === "module2flag", "New module and flag should be added");

  // Test 2: No changes needed
  const noChangesResult = checkAndMergeConfig(mergedResult, newTemplate);
  console.assert(noChangesResult === null, "No changes should be needed");

  // Test 3: Changes needed
  const furtherUpdatedTemplate = JSON.parse(JSON.stringify(newTemplate));
  furtherUpdatedTemplate.module2.flag4 = {
    value: "newer",
    description: "Newest flag",
    options: ["newer"],
    enabled: true
  };

  const changesNeededResult = checkAndMergeConfig(mergedResult, furtherUpdatedTemplate);
  console.assert(changesNeededResult !== null, "Changes should be needed");
  console.assert(changesNeededResult.module2.flag4.value === "newer", "New flag should be added in checkAndMergeConfig");

  console.log("All tests completed.");

  console.log('existing user config:', existingConfig);
  console.log('new template config:', newTemplate);
  console.log('merged config results:', mergedResult);
}

runTests();

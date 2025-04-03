import _ from 'lodash';


export function mergeConfigurations(existingConfig, newConfigTemplate) {
	return _.mergeWith({}, existingConfig, newConfigTemplate, (objValue, srcValue) => {
    		if (_.isObject(objValue) && _.has(objValue, 'value')) {

      			// Preserve existing value, but update other properties
      			return {
        		...srcValue,
        		value: objValue.value
      			};
    		}
  	});
}

export function checkAndMergeConfig(idbConfig, templateConfig) {
	const merged = mergeConfigurations(idbConfig, templateConfig);
  
	return _.isEqual(merged, idbConfig) ? null : merged;
}

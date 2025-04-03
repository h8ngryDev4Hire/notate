// Constants
const STORAGE_KEYS = {
  SESSION_DISMISS: 'context_menu_session_dismiss'
};

/**
 * Dismiss the context menu until page reload
 * @param {Function} setContextMenuState - State setter function from context
 * @returns {void}
 */
export const dismissUntilReload = (setContextMenuState) => {
  console.log('🔴 Dismissing context menu until page reload');
  // Immediately set context menu state to false
  setContextMenuState(false);
};

/**
 * Dismiss the context menu for a specific site
 * @param {string} site - Current site hostname
 * @param {Object} userconfigurationdb - User configuration database
 * @param {Function} makeRequest - Request function for database updates
 * @returns {Promise<boolean>} Success status
 */
export const dismissForSite = async (site, userconfigurationdb, makeRequest) => {
  try {
    console.log(`🔴 Attempting to dismiss context menu for site: ${site}`);
    
    // Get current configuration or initialize if not present
    const config = userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0] || {};
    const currentWebContent = config.WebContent || {};
    const dismissedSites = currentWebContent.dismissedSites || [];
    
    console.log('🔎 Current dismissed sites:', dismissedSites);
    
    // Only update if site isn't already in the list
    if (!dismissedSites.includes(site)) {
      // Update the list in the existing object
      const updatedSites = [...dismissedSites, site];
      console.log('🔄 Updating dismissed sites to:', updatedSites);
      
      // Modify the userconfigurationdb directly
      if (userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]) {
        if (!userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent) {
          userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent = {};
        }
        userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent.dismissedSites = updatedSites;
      }
      
      // Send the updated database to the backend
      console.log('🔄 Sending updated database to backend');
      makeRequest({ 
        type: "POST_DATABASE", 
        data: userconfigurationdb.inventory.USER_CONFIGURATION[0], 
        store: 'USER_CONFIGURATION',
        database: 'userConfiguration'
      });
      
      console.log('✅ Database update request sent successfully');
    } else {
      console.log('ℹ️ Site already in dismissed list, no update needed');
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error dismissing for site:', error);
    return false;
  }
};

/**
 * Dismiss the context menu for the current browser session
 * @returns {boolean} Success status
 */
export const dismissForSession = () => {
  try {
    console.log('🔴 Dismissing context menu for current browser session');
    
    // Use sessionStorage if possible (clears when tab is closed)
    if (window.sessionStorage) {
      console.log('🔄 Using sessionStorage for session dismissal');
      window.sessionStorage.setItem(STORAGE_KEYS.SESSION_DISMISS, 'true');
    } else {
      console.log('🔄 Falling back to localStorage for session dismissal');
      // Fall back to localStorage
      window.localStorage.setItem(STORAGE_KEYS.SESSION_DISMISS, 'true');
    }
    
    console.log('✅ Session dismissal set successfully');
    return true;
  } catch (error) {
    console.error('❌ Error dismissing for session:', error);
    return false;
  }
};

/**
 * Check if the context menu is dismissed for a specific site
 * @param {string} site - Current site hostname
 * @param {Object} userconfigurationdb - User configuration database
 * @returns {boolean} True if should be dismissed
 */
export const isContextMenuDismissedForSite = (site, userconfigurationdb) => {
  try {
    console.log(`🔍 Checking if context menu is dismissed for site: ${site}`);
    
    const dismissedSites = 
      userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]?.WebContent?.dismissedSites || [];
    
    const isDismissed = dismissedSites.includes(site);
    console.log('🔎 Dismissed sites:', dismissedSites);
    console.log(`${isDismissed ? '✅' : '❌'} Site ${site} is ${isDismissed ? 'dismissed' : 'not dismissed'}`);
    
    return isDismissed;
  } catch (error) {
    console.error('❌ Error checking site dismissal:', error);
    return false;
  }
};

/**
 * Check if the context menu is dismissed for the current session
 * @returns {boolean} True if should be dismissed
 */
export const isContextMenuDismissedForSession = () => {
  try {
    console.log('🔍 Checking if context menu is dismissed for current session');
    let isDismissed = false;
    
    // Try sessionStorage first
    if (window.sessionStorage) {
      console.log('🔎 Checking sessionStorage for session dismissal');
      isDismissed = window.sessionStorage.getItem(STORAGE_KEYS.SESSION_DISMISS) === 'true';
    } else {
      // Fall back to localStorage
      console.log('🔎 Checking localStorage for session dismissal');
      isDismissed = window.localStorage.getItem(STORAGE_KEYS.SESSION_DISMISS) === 'true';
    }
    
    console.log(`${isDismissed ? '✅' : '❌'} Session dismissal is ${isDismissed ? 'active' : 'not active'}`);
    return isDismissed;
  } catch (error) {
    console.error('❌ Error checking session dismissal:', error);
    return false;
  }
};

/**
 * Reset all dismissal settings
 * @param {Function} makeRequest - Request function for database updates
 * @param {Object} userconfigurationdb - User configuration database
 * @returns {Promise<boolean>} Success status
 */
export const resetDismissalSettings = async (makeRequest, userconfigurationdb) => {
  try {
    console.log('🔄 Resetting all dismissal settings');
    
    // Modify the userconfigurationdb directly
    if (userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]) {
      if (!userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent) {
        userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent = {};
      }
      userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent.dismissedSites = [];
    }
    
    // Send the updated database to the backend
    console.log('🔄 Sending updated database to backend');
    makeRequest({ 
      type: "POST_DATABASE", 
      data: userconfigurationdb.inventory.USER_CONFIGURATION[0], 
      store: 'USER_CONFIGURATION',
      database: 'userConfiguration'
    });
    
    // Clear session dismissal
    console.log('🔄 Clearing session dismissal from storage');
    if (window.sessionStorage) {
      window.sessionStorage.removeItem(STORAGE_KEYS.SESSION_DISMISS);
    }
    window.localStorage.removeItem(STORAGE_KEYS.SESSION_DISMISS);
    
    console.log('✅ All dismissal settings reset successfully');
    return true;
  } catch (error) {
    console.error('❌ Error resetting dismissal settings:', error);
    return false;
  }
}; 
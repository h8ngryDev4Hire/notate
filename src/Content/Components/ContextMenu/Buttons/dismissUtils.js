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
    // Get current configuration or initialize if not present
    const config = userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0] || {};
    const currentWebContent = config.WebContent || {};
    const dismissedSites = currentWebContent.dismissedSites || [];
    
    // Only update if site isn't already in the list
    if (!dismissedSites.includes(site)) {
      // Update the list in the existing object
      const updatedSites = [...dismissedSites, site];
      
      // Modify the userconfigurationdb directly
      if (userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]) {
        if (!userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent) {
          userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent = {};
        }
        userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent.dismissedSites = updatedSites;
      }
      
      // Send the updated database to the backend
      makeRequest({ 
        type: "POST_DATABASE", 
        data: userconfigurationdb.inventory.USER_CONFIGURATION[0], 
        store: 'USER_CONFIGURATION',
        database: 'userConfiguration'
      });
    }
    
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Dismiss the context menu for the current browser session
 * @returns {boolean} Success status
 */
export const dismissForSession = () => {
  try {
    // Use sessionStorage if possible (clears when tab is closed)
    if (window.sessionStorage) {
      window.sessionStorage.setItem(STORAGE_KEYS.SESSION_DISMISS, 'true');
    } else {
      // Fall back to localStorage
      window.localStorage.setItem(STORAGE_KEYS.SESSION_DISMISS, 'true');
    }
    
    return true;
  } catch (error) {
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
    const dismissedSites = 
      userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]?.WebContent?.dismissedSites || [];
    
    const isDismissed = dismissedSites.includes(site);
    
    return isDismissed;
  } catch (error) {
    return false;
  }
};

/**
 * Check if the context menu is dismissed for the current session
 * @returns {boolean} True if should be dismissed
 */
export const isContextMenuDismissedForSession = () => {
  try {
    let isDismissed = false;
    
    // Try sessionStorage first
    if (window.sessionStorage) {
      isDismissed = window.sessionStorage.getItem(STORAGE_KEYS.SESSION_DISMISS) === 'true';
    } else {
      // Fall back to localStorage
      isDismissed = window.localStorage.getItem(STORAGE_KEYS.SESSION_DISMISS) === 'true';
    }
    
    return isDismissed;
  } catch (error) {
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
    // Modify the userconfigurationdb directly
    if (userconfigurationdb?.inventory?.USER_CONFIGURATION?.[0]) {
      if (!userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent) {
        userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent = {};
      }
      userconfigurationdb.inventory.USER_CONFIGURATION[0].WebContent.dismissedSites = [];
    }
    
    // Send the updated database to the backend
    makeRequest({ 
      type: "POST_DATABASE", 
      data: userconfigurationdb.inventory.USER_CONFIGURATION[0], 
      store: 'USER_CONFIGURATION',
      database: 'userConfiguration'
    });
    
    // Clear session dismissal
    if (window.sessionStorage) {
      window.sessionStorage.removeItem(STORAGE_KEYS.SESSION_DISMISS);
    }
    window.localStorage.removeItem(STORAGE_KEYS.SESSION_DISMISS);
    
    return true;
  } catch (error) {
    return false;
  }
}; 
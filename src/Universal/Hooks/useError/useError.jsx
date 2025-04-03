import { useCallback } from 'react';
import { ERROR_LOGGING_DB } from '@background/Utils/coreService.js';
import useRequest from '@universal/Hooks/useRequest/useRequest.jsx';

/**
 * Hook for handling errors in UI components and sending them to the background script
 * for logging via the existing database connection pattern.
 * 
 * @returns {Function} logError - Function to log errors with optional context
 */
export default function useError() {
  // Use the existing request hook for database operations
  const [, makeRequest] = useRequest();

  /**
   * Logs an error to the background script's error logging system
   * 
   * @param {Error} error - The error object to log
   * @param {Object} context - Additional context about where/when the error occurred
   */
  const logError = useCallback((error, context = {}) => {
    try {
      // Add component information to context if not provided
      const enhancedContext = {
        ...context,
        source: context.source || 'ui-component',
        timestamp: new Date().toISOString(),
      };

      // Create error log entry
      const errorLog = {
        timestamp: new Date().toISOString(),
        error: {
          name: error?.name || 'UnknownError',
          message: error?.message || 'Unknown error occurred',
          stackTrace: error?.stack || ''
        },
        context: enhancedContext
      };

      // Use the existing request mechanism to send the error
      makeRequest({
        type: 'POST_DATABASE',
        database: ERROR_LOGGING_DB,
        data: errorLog,
        store: 'ERRORS'
      });
      
      // Log to console in development mode
      if (process.env.NODE_ENV !== 'production') {
        console.error('Error logged:', error);
        console.info('Error context:', enhancedContext);
      }
      
    } catch (loggingError) {
      // Fallback to console if sending to background fails
      console.error('Error during error logging:', loggingError);
      console.error('Original error:', error);
    }
  }, [makeRequest]);

  return logError;
}
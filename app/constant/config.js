const isDevEnv = process.env.NODE_ENV === 'development';

export default {
  // App Details
  appName: 'Bitfinex',

  // Build Configuration - eg. Debug or Release?
  isDevEnv,

  // Date Format
  dateFormat: 'Do MMM YYYY',

  // API
  apiBaseUrl: isDevEnv
    ? 'http://localhost:4000/api'
    : 'https://bitfinex.com:4000/api',
};

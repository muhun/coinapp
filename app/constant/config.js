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
    ? 'wss://api-pub.bitfinex.com/ws/2'
    : 'wss://api-pub.bitfinex.com/ws/2',
};

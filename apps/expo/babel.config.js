module.exports = function (api) {
  api.cache(true)

    // Get the current environment or default to 'development'
    const APP_ENV = process.env.APP_ENV || 'development';

    // Set the path based on the environment
    const envPath = `.env.${APP_ENV}`;

  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: envPath,
          blocklist: null,
          allowlist: null,
          blacklist: null, // DEPRECATED
          whitelist: null, // DEPRECATED
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      'react-native-reanimated/plugin',
      'nativewind/babel',
      'expo-router/babel',
    ],
  }
}

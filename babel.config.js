module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@constants': './src/constants',
          '@screens': './src/screens',
          '@components': './src/components',
          '@services': './src/services',
          '@typings': './src/typings',
          '@styles': './src/styles',
          '@assets': './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

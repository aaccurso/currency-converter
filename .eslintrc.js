module.exports = {
  env: {
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  extends: [
    'react',
    'react-native'
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/no-nodejs-modules': 0,
    'no-invalid-this': 0,
    'react/jsx-no-bind': 0
  }
};

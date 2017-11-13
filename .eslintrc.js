module.exports = {
    env: {
        'jest/globals': true,
        browser: true
    },
    globals: {
        Promise: false
    },
    parser: 'babel-eslint',
    plugins: ['react', 'react-native', 'jest'],
    extends: ['eslint:recommended', 'plugin:react-native/all', 'plugin:react/recommended'],
    rules: {
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/no-nodejs-modules': 0,
        'no-invalid-this': 0,
        'react/jsx-no-bind': 0
    }
};

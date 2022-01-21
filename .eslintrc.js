module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'jest',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
  },
};

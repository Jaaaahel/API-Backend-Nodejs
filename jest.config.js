module.exports = {
  testEnvironment: 'node',
  verbose: false,

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },

  testMatch: [
    '**/tests/**/*.test.[jt]s?(x)',
  ],

  globalSetup: './tests/helpers/global-setup.js',
  globalTeardown: './tests/helpers/global-teardown.js',
};

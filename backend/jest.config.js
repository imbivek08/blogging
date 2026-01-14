export default {
  testEnvironment: 'node',
  transform: {},
  moduleFileExtensions: ['js', 'mjs'],
  testMatch: ['**/__tests__/**/*.test.js', '**/*.test.js'],
  collectCoverageFrom: ['api/**/*.js', '!api/index.js'],
  coverageDirectory: 'coverage',
  verbose: true,
};

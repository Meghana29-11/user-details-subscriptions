// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

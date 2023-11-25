module.exports = {
  moduleFileExtensions: ['js', 'vue'],

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],

  testEnvironmentOptions: {
    url: 'http://localhost',
  },

  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.vue$': 'vue-jest',
  },
};

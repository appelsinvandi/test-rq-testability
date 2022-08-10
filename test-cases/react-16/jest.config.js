/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}

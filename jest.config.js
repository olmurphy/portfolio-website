module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/main.ts",
        "!src/**/*.module.ts",
    ],
};
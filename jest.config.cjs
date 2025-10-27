module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/students/**/tests/**/*.test.js"],
  collectCoverageFrom: ["students/**/src/**/*.js"],
  coverageDirectory: "coverage",
  verbose: true,
  collectCoverage: true,

  // Exige al menos 80 % de cobertura global
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
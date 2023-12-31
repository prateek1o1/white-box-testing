module.exports = {
    testRunner: "mocha",
    reporters: ["clear-text", "progress", "html",'event-recorder'],
    packageManager: "npm",
    coverageAnalysis: "perTest",
    mutate: ["core/**/*.js"],
    thresholds: {
      high: 80,
      low: 60,
      break: null,
    },
  };
  
// Statistician: "Hello World" with Confidence Intervals
// Demonstrates hypothesis testing and normal distribution principles

function calculateConfidenceInterval(mean, stdDev, sampleSize, confidenceLevel = 0.95) {
  // Z-score lookup for common confidence levels
  const zScores = { 0.95: 1.96, 0.99: 2.576, 0.90: 1.645 };
  const z = zScores[confidenceLevel] || 1.96;

  // Standard error = stdDev / sqrt(n)
  const standardError = stdDev / Math.sqrt(sampleSize);

  // Margin of error
  const marginOfError = z * standardError;

  return {
    lower: mean - marginOfError,
    upper: mean + marginOfError,
    mean: mean,
    marginOfError: marginOfError
  };
}

// Sample dataset: "Hello World" length frequencies
const sampleSizes = [11, 11, 11, 11, 11];
const mean = 11;
const stdDev = 0;
const sample = sampleSizes.length;

const ci95 = calculateConfidenceInterval(mean, stdDev, sample, 0.95);

console.log("=== Statistical Analysis Report ===");
console.log("Hypothesis: 'Hello World' has mean length = 11 characters");
console.log(`Sample size (n): ${sample}`);
console.log(`Sample mean: ${ci95.mean.toFixed(4)}`);
console.log(`95% CI: [${ci95.lower.toFixed(4)}, ${ci95.upper.toFixed(4)}]`);
console.log(`Standard Error: ${(stdDev / Math.sqrt(sample)).toFixed(4)}`);
console.log("Conclusion: We are 95% confident the true mean lies within this interval.");
console.log("\nHello World (n=1 observation)");

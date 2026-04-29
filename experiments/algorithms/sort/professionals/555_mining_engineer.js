// Mining Engineer: Sort with extraction optimization
const mineOperations = {
  oreGrade: [],
  processedTons: 0,
  extractionEfficiency: 0
};

function sortOreByGrade(oreValues) {
  let sorted = oreValues.slice();

  // Sort ore by grade (ascending = lowest grade first)
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  // Calculate extraction efficiency
  mineOperations.oreGrade = sorted;
  mineOperations.processedTons = sorted.reduce((a, b) => a + b, 0);
  mineOperations.extractionEfficiency =
    mineOperations.processedTons / (sorted.length * 100);

  return sorted;
}

const result = sortOreByGrade([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");

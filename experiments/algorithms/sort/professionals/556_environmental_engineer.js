// Environmental Engineer: Sort with sustainability tracking
const sustainabilityReport = {
  energyUsed: 0,
  carbonPerOperation: 0,
  recyclable: []
};

function sortSustainably(input) {
  let array = input.slice();
  let operationCount = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      operationCount++;
      sustainabilityReport.energyUsed += 0.001; // kWh per operation

      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  // Calculate carbon footprint
  sustainabilityReport.carbonPerOperation = (operationCount * 0.5) / 1000; // kg CO2
  sustainabilityReport.recyclable = array;

  return array;
}

const result = sortSustainably([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");

// FPGA Engineer: Hardware-optimized sort pipeline
const hardware = {
  stages: 0,
  clocksPerComparison: 1,
  throughput: 0
};

function sortInHardwarePipeline(input) {
  let array = input.slice();
  let stage = 0;

  // Pipelined sorting stages
  for (let i = 0; i < array.length - 1; i++) {
    stage++;

    for (let j = i + 1; j < array.length; j++) {
      // Hardware comparator
      const greaterThan = array[i] > array[j];

      if (greaterThan) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  hardware.stages = stage;
  hardware.throughput = array.length / stage;

  return array;
}

const sorted = sortInHardwarePipeline([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + sorted.join(",") + "]");

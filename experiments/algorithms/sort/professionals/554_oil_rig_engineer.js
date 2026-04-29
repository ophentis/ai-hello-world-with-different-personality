// Oil Rig Engineer: Sort with pressure relief
const rig = {
  wellPressure: 0,
  maxPressure: 3000,
  releaseValveOpen: false,
  extracted: []
};

function sortWithPressureRelief(input) {
  let array = input.slice();
  let pressure = 0;

  for (let i = 0; i < array.length - 1; i++) {
    // Calculate cumulative pressure
    pressure += array[i];

    if (pressure > rig.maxPressure) {
      rig.releaseValveOpen = true;
      pressure -= 500;
    }

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  rig.wellPressure = pressure;
  rig.extracted = array;

  return array;
}

const result = sortWithPressureRelief([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");

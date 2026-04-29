// Control Systems Engineer: Sort with feedback control
const controller = {
  setpoint: 0,
  actualPosition: 0,
  error: 0,
  gain: 1.0
};

function sortWithFeedback(input) {
  let array = input.slice();
  let iterations = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Calculate error between current and target state
      controller.actualPosition = array[i];
      controller.error = array[j] - array[i];

      if (array[i] > array[j]) {
        // Apply corrective action
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        iterations++;
      }
    }
  }

  return array;
}

const sorted = sortWithFeedback([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + sorted.join(",") + "]");

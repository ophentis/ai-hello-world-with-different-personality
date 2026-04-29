// Nuclear Reactor Operator: Sort with safety interlocks
const safetyInterlocks = {
  systemA: true,
  systemB: true,
  sortAllowed: true
};

function verifySafety() {
  return safetyInterlocks.systemA && safetyInterlocks.systemB;
}

function sortWithSafetyInterlocks(input) {
  if (!verifySafety()) {
    console.error("SAFETY INTERLOCKS TRIPPED");
    return input;
  }

  let array = input.slice();

  for (let i = 0; i < array.length - 1; i++) {
    // Verify safety before each operation
    if (!verifySafety()) break;

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const result = sortWithSafetyInterlocks([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + result.join(",") + "]");

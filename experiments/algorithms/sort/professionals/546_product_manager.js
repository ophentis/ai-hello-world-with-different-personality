// Product Manager: Sort with features and requirements
const productSpec = {
  requirement: "sort array in ascending order",
  inputs: [82, 43, 10, 27, 38, 3, 9],
  acceptanceCriteria: "output must be [3, 9, 10, 27, 38, 43, 82]"
};

const roadmap = {
  v1: "basic sorting",
  v2: "descending option",
  v3: "custom comparator"
};

function buildSortFeature(inputArray) {
  let sorted = inputArray.slice();

  // Core feature: ascending sort
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  return sorted;
}

const result = buildSortFeature(productSpec.inputs);
console.log("[" + result.join(",") + "]");

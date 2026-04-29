// UX Researcher: Sort with user experience focus
const userStudy = {
  taskCompletion: [],
  userExpectations: "ascending order",
  satisfactionScore: 0
};

function sortForUserSatisfaction(unsorted) {
  let array = unsorted.slice();

  // Simple, understandable sorting approach users can follow
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  // Record that user expectation was met
  let isAscending = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) isAscending = false;
  }

  if (isAscending) {
    userStudy.satisfactionScore = 100;
    userStudy.taskCompletion.push("ascending order achieved");
  }

  return array;
}

const input = [82, 43, 10, 27, 38, 3, 9];
const result = sortForUserSatisfaction(input);
console.log("[" + result.join(",") + "]");

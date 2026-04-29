// Scrum Master: Sort with sprint tracking
const sprintBoard = {
  backlog: [],
  inProgress: [],
  done: [],
  velocity: 0
};

function sortWithSprintTracking(input) {
  let array = input.slice();
  let tasksCompleted = 0;

  // Sprint planning: break into tasks
  for (let i = 0; i < array.length - 1; i++) {
    sprintBoard.backlog.push(`compare group ${i}`);
  }

  // Execute sprint
  for (let i = 0; i < array.length - 1; i++) {
    sprintBoard.inProgress.push(`comparing position ${i}`);

    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }

    sprintBoard.done.push(`group ${i} sorted`);
    tasksCompleted++;
  }

  sprintBoard.velocity = tasksCompleted;
  return array;
}

const sorted = sortWithSprintTracking([82, 43, 10, 27, 38, 3, 9]);
console.log("[" + sorted.join(",") + "]");

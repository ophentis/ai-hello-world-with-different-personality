// Scrum Master: Sprint ceremonies and velocity tracking
const sprintMetrics = {
  storiesCompleted: 0,
  velocity: 0,
  blockers: []
};

function fizzBuzzSprint() {
  // Sprint goal: complete FizzBuzz for range 1-100
  let sprint = { items: 0, completed: 0 };

  for (let i = 1; i <= 100; i++) {
    sprint.items++;
    let output;

    // Daily standup: check if item is done
    if (i % 15 === 0) {
      output = "FizzBuzz";
      sprint.completed++;
    } else if (i % 3 === 0) {
      output = "Fizz";
      sprint.completed++;
    } else if (i % 5 === 0) {
      output = "Buzz";
      sprint.completed++;
    } else {
      output = i.toString();
      sprint.completed++;
    }

    console.log(output);
  }

  sprintMetrics.storiesCompleted = sprint.completed;
  sprintMetrics.velocity = sprint.completed / 100 * 100;
}

fizzBuzzSprint();

// Scrum Master: Fibonacci with sprint goals
const sprint = {
  backlog: 20,
  inProgress: 0,
  completed: 0,
  velocity: 0
};

function generateFibonacciSprint() {
  let prev = 0;
  let curr = 1;

  // Start sprint
  console.log(prev);
  sprint.completed++;

  for (let i = 1; i < 20; i++) {
    sprint.inProgress++;

    console.log(curr);
    sprint.completed++;

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  sprint.velocity = sprint.completed;
}

generateFibonacciSprint();

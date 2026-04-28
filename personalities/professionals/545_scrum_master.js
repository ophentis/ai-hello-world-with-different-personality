// Scrum Master - Sprint Planning, Velocity Tracking, Retrospectives
// Orchestrates agile ceremonies and team impediment resolution

const sprint = {
  number: 47,
  duration: "2 weeks",
  startDate: "2024-03-18",
  endDate: "2024-03-31",
  sprintGoal: "Implement payment retry logic and improve API resilience"
};

const backlogItems = [
  { id: "FEAT-1204", title: "Retry payment processing", storyPoints: 8, status: "IN_PROGRESS", assignee: "Alice" },
  { id: "FEAT-1205", title: "Add circuit breaker pattern", storyPoints: 13, status: "IN_PROGRESS", assignee: "Bob" },
  { id: "BUG-2041", title: "Fix timeout handling", storyPoints: 5, status: "DONE", assignee: "Carol" },
  { id: "TECH-892", title: "Upgrade dependencies", storyPoints: 3, status: "READY", assignee: null }
];

const velocityHistory = [42, 48, 45, 51, 44]; // Last 5 sprints
const teamCapacity = 50;

function runSprintStandup() {
  console.log("📋 SPRINT " + sprint.number + " STANDUP REPORT");
  console.log("═".repeat(45));
  console.log(`Sprint Goal: ${sprint.goal}`);
  console.log(`Duration: ${sprint.duration} (${sprint.startDate} - ${sprint.endDate})\n`);

  const done = backlogItems.filter(b => b.status === "DONE").length;
  const inProgress = backlogItems.filter(b => b.status === "IN_PROGRESS").length;

  console.log("TODAY'S PROGRESS:");
  console.log(`✓ Completed: ${done} items`);
  console.log(`→ In Progress: ${inProgress} items`);
  console.log(`⏳ Ready: ${backlogItems.filter(b => b.status === "READY").length} items\n`);

  const avgVelocity = velocityHistory.reduce((a, b) => a + b) / velocityHistory.length;
  console.log(`VELOCITY METRICS:`);
  console.log(`Average Velocity (5 sprints): ${avgVelocity.toFixed(1)} pts`);
  console.log(`Current Capacity: ${teamCapacity} pts`);
  console.log(`Confidence: ${((avgVelocity / teamCapacity) * 100).toFixed(0)}%\n`);

  console.log("ASSIGNMENTS:");
  backlogItems
    .filter(b => b.assignee)
    .forEach(b => {
      console.log(`${b.assignee}: ${b.title} (${b.storyPoints}pt, ${b.status})`);
    });

  console.log("\n🚧 IMPEDIMENTS: None blocking progress");
  console.log("✓ Team is aligned on sprint goal");
}

runSprintStandup();

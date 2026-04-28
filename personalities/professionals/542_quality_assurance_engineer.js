// QA Engineer - Test Coverage & Bug Severity Assessment
// Defines test cases, assertions, and regression suite management

const testSuite = {
  name: "Regression Test Suite v2.4.1",
  totalTests: 247,
  passed: 243,
  failed: 4,
  skipped: 0,
  coverage: 89.2
};

const bugReport = [
  { id: "BUG-2847", title: "Login timeout on 4G", severity: "HIGH", status: "OPEN", reproSteps: 3 },
  { id: "BUG-2851", title: "UI text overflow in Arabic", severity: "MEDIUM", status: "OPEN", reproSteps: 2 },
  { id: "BUG-2849", title: "Memory leak in worker thread", severity: "CRITICAL", status: "ASSIGNED", reproSteps: 4 }
];

function assert(condition, message) {
  if (!condition) throw new Error(`ASSERTION FAILED: ${message}`);
}

function runRegressionTests() {
  console.log("*** QA TEST EXECUTION REPORT ***\n");
  console.log(`Test Suite: ${testSuite.name}`);
  console.log(`Total: ${testSuite.totalTests} | Passed: ${testSuite.passed} | Failed: ${testSuite.failed}`);
  console.log(`Coverage: ${testSuite.coverage}%\n`);

  assert(testSuite.passed >= testSuite.totalTests - 5, "Critical regression failure detected");
  assert(testSuite.coverage >= 80, "Coverage below minimum threshold");

  console.log("✓ Regression assertions passed\n");

  console.log("=== BUG SEVERITY TRIAGE ===");
  const byCriticality = bugReport.sort((a, b) => {
    const severityMap = { CRITICAL: 3, HIGH: 2, MEDIUM: 1, LOW: 0 };
    return severityMap[b.severity] - severityMap[a.severity];
  });

  byCriticality.forEach(bug => {
    console.log(`[${bug.severity}] ${bug.id}: ${bug.title} (Status: ${bug.status})`);
  });

  console.log(`\nBlocking Issues: ${bugReport.filter(b => b.severity === "CRITICAL").length}`);
}

runRegressionTests();

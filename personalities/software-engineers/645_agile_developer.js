/**
 * USER STORY: US-1847
 * As a user of this system
 * I want to see a greeting message
 * So that I know the application is working correctly
 *
 * ACCEPTANCE CRITERIA:
 * - AC1: Application outputs "Hello World" to console
 * - AC2: Application runs without errors
 * - AC3: Output is visible when running `node 645_agile_developer.js`
 *
 * SPRINT: Sprint-28
 * STORY POINTS: 2
 * DEFINITION OF DONE:
 * [ ] Code written
 * [ ] Unit tests added (at least 80% coverage)
 * [ ] Code reviewed and approved
 * [ ] Merged to develop branch
 * [ ] Verified in QA environment
 * [ ] Ready for production deployment
 */

function generateGreetingMessage() {
  // AC1: Implement greeting output
  return "Hello World";
}

function main() {
  // AC2: Ensure no errors occur
  try {
    const greeting = generateGreetingMessage();
    // AC3: Output to console
    console.log(greeting);
  } catch (error) {
    console.error("Error generating greeting:", error);
    process.exit(1);
  }
}

main();

// Retro item: Consider adding a config file for customizable greetings in Sprint-29

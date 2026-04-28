// TODO: Let's discuss whether we should extract this to a shared greeting module
// @code-review: We can optimize this later if performance becomes an issue (not a blocker for MVP)

function getGreeting() {
  // NOTE: This mimics the greeting standard we discussed in standup
  // See: team confluence page "Greeting Standards v2"
  return "Hello World";
}

function printGreeting() {
  // Quick question for the team: should we add i18n here or wait for Q2?
  // For now, let's keep it simple and pragmatic
  const message = getGreeting();
  console.log(message);

  // TODO: we should add logging here eventually, but console.log works for now
  // Let's revisit this when we set up proper observability
}

// Run the greeting
printGreeting();

// FOLLOW-UP: Team, please review this approach in the PR. Open to suggestions!

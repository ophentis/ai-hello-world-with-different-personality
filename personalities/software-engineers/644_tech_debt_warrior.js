// DEPRECATED: The old greeting pattern (see 644_tech_debt_warrior.js.old for legacy)
// REFACTOR: This should use a proper greeting factory instead of inline string
// MIGRATION: Users should adopt the new GreetingService pattern below

// TECHNICAL DEBT: This approach couples presentation to business logic
// SHOULD BE: Extracted into separate concerns for testability
function oldStyleGreeting() {
  return "Hello World";
}

// NEW PATTERN: The system should support flexible greeting composition
class GreetingService {
  // DEPRECATION WARNING: Do not use the old inline pattern above
  static create() {
    return new GreetingService();
  }

  getMessage() {
    // REFACTOR OPPORTUNITY: This could be lazy-loaded from config
    return "Hello World";
  }
}

// MIGRATION PATH: Replace all calls to oldStyleGreeting() with:
// const greeting = GreetingService.create().getMessage();

const service = GreetingService.create();
console.log(service.getMessage());

// TODO: Schedule technical debt sprint to clean up oldStyleGreeting references
// BLOCKED: Cannot fully remove until staging environment confirms zero usage

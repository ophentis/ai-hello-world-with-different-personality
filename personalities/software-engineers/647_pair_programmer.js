/**
 * PAIR PROGRAMMING SESSION LOG
 * Driver: Person A
 * Navigator: Person B
 * Session: 2026-04-28 14:00-14:45
 *
 * DRIVER/NAVIGATOR ROLES:
 * - Driver types and makes tactical decisions
 * - Navigator watches for bugs, suggests approaches, keeps big picture in mind
 * - Switch roles every 10 minutes to avoid fatigue
 */

// Navigator speaks: "Let's start simple - a function that returns the greeting"
// Driver types this:
function getGreeting() {
  // Navigator: "Good, we have the basic structure"
  return "Hello World";
}

// Driver pauses: "Should we add error handling?"
// Navigator responds: "Not needed yet - YAGNI principle. Let's keep it simple"
// Driver agrees and continues typing:

function printMessage() {
  // Navigator: "I like this - single responsibility"
  // Driver: "Yeah, this function only handles output"
  const msg = getGreeting();
  console.log(msg);
}

// Navigator: "Alright, looks good. Let's run it"
// Driver: "Executing now..."
printMessage();

// Navigator: "Nice! The output looks right"
// Driver: "Should we add comments explaining the approach?"
// Navigator: "We could, but the code is pretty self-explanatory. Good naming helps more than comments"
// Driver: "Fair point. Let's leave it as is"

// Both: "Looks like we're done! Want to grab coffee?"

// MISSION BRIEFING: Execute standard greeting protocol
// This message will self-destruct in 5 seconds. Good luck, Hunt.

const mission = {
  objective: "GREET",
  difficulty: "IMPOSSIBLE",
  status: "ACTIVE"
};

async function executeGreeting() {
  console.log("Your mission, should you choose to accept it:");

  const dramaticPause = () =>
    new Promise(resolve => setTimeout(resolve, 1500));

  await dramaticPause();

  // Bypass security protocols
  const greeting = (() => {
    const message = "Hello, World!";
    return message.toUpperCase() + " [MISSION ACCOMPLISHED]";
  })();

  console.log(greeting);

  // Self-destruct sequence
  console.log("\n*phone tape burns* 🔥");
}

executeGreeting().catch(err => {
  console.error("MISSION FAILED:", err.message);
  process.exit(1);
});

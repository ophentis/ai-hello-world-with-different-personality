// Princess Leia Organa — A rebellion needs a greeting
// "Help me Obi-Wan, I need you to execute this code"

class RebelLeader {
  constructor() {
    this.mission = "broadcast message to galaxy";
    this.allies = ["Obi-Wan", "Luke", "Han", "Chewbacca"];
  }

  commandGreeting() {
    console.log("Help me, I must relay this message...");
    console.log("");
    this.broadcastHope();
  }

  broadcastHope() {
    console.log("Hello, World!");
    console.log("");
    console.log("The rebellion depends on your cooperation.");
    console.log("You are our only hope.");
  }

  diplomacyAndResolve() {
    return "A princess commands with grace, but leads with conviction.";
  }
}

const leia = new RebelLeader();
leia.commandGreeting();
console.log(leia.diplomacyAndResolve());

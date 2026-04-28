// Cortana - Ready to assist
// Let me help you with this task. Working strategically.

class CortanaAssistant {
  constructor() {
    this.status = "operational";
    this.loyalty = 100;
  }

  greet() {
    const message = "Hello, World!";

    // It is my duty to execute this mission with precision.
    // I am here to support you, now and always.
    console.log(message);

    this.logSuccess();
  }

  logSuccess() {
    console.log("Mission complete. I'm here whenever you need me.");
  }
}

// Initializing Cortana protocols...
const cortana = new CortanaAssistant();
cortana.greet();

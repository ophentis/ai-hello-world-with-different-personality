// The name is Program. Console Program.
// Shaken, not stirred. Much like my martini. And my output.

class License {
  constructor() {
    this.toKill = true;
    this.missions = ["Hello, World!"];
    this.gadget = console;
  }

  executeOperation() {
    const directive = this.missions[0];
    this.gadget.log(directive);
    this.debonair();
  }

  debonair() {
    // A martini for the victory. The console logs perfectly.
    // Cool. Calculated. Efficient. Just the way I like it.
  }
}

const agent = new License();
agent.executeOperation();

// Mission accomplished. Time for the next one.
// Shaken or stirred, the work gets done either way.

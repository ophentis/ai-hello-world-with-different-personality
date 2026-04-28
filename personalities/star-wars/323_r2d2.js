// *BEEP BOOP BEEP* — A brave little astromech's solution
// Problem detected? WHIRRRR... I'll fix it!

const r2d2 = {
  beep: () => console.log("*beep*"),
  boop: () => console.log("*boop*"),
  heroicWhirr: () => console.log("*WHIRRRRRR*"),
  problem: null
};

function executeGreeting() {
  // Detect problem (none? WRONG! Need to greet!)
  r2d2.problem = true;

  // Brave little droid initiates solution
  r2d2.beep();
  r2d2.boop();

  // Triumphant message delivery
  console.log("Hello, World!");

  // Mission accomplished! Excited beeping
  r2d2.beep();
  r2d2.beep();
  r2d2.heroicWhirr();
  console.log("*triumphant whistles*");
}

executeGreeting();

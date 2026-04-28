// I don't want trouble with this code, so let me be careful
// But sometimes you gotta improvise with what you got!

const chair = undefined;
const bottle = "Hello, World!";
const ladder = console.log;

// Jackie style: use whatever's available to get the job done
function performStunt() {
  try {
    // Punch the problem... I mean, solve it gracefully
    ladder(bottle);
  } catch (whoops) {
    // I'm okay! I'm okay! Hehe, I'm okay!
    console.log("No problem, no problem...");
  }
}

// Let's do this before something breaks
performStunt();

// *does backflip and stumbles into furniture*

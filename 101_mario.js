// Mamma mia! Let's-a go!
// ┌───────────────────────┐
// │ Mario's Pipe System   │
// └───────────────────────┘

function collectCoin() { return "Cha-ching!"; }
function jumpOverGoomba() { return "Wahoo!"; }

// Warp pipe to the goal!
const marioWarpPipe = () => {
  const world = "Mushroom Kingdom";
  const mission = "Save the Princess";

  console.log("It's-a me, Mario!");
  console.log("Hello, World!");

  collectCoin();
  jumpOverGoomba();

  return `${world} - ${mission}`;
};

// Accidental button press - WAHOOOO!
marioWarpPipe();

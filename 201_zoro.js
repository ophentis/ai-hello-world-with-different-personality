// Where the heck am I going?!
// Lost swordsman navigation system v1.0

let message = "Hello, World!";
let direction = "north";

// I'll find my way eventually
while (message.length > 0) {
  let random = Math.floor(Math.random() * 4);

  if (random === 0) direction = "north";
  else if (random === 1) direction = "south";
  else if (random === 2) direction = "east";
  else direction = "west";

  // Wait, I think this is the right way...
  if (direction === "north") {
    console.log(message);
    message = "";
  }
}

// Three swords, one goal.

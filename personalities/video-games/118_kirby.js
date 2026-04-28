// Kirby - The pink puffball
// Poyo! Poyo poyo!

const kirby = {
  color: "pink",
  puffiness: 100,
  size: "smol but powerful",
  sayings: ["Poyo!", "Poyo poyo", "Poyooo!"],
};

const inhale = (ability) => {
  // *vacuum sound intensifies*
  // POYOOOOO!!!
  kirby.abilities = ability;
};

const copyPower = () => {
  return "Hello, World! (via copy)";
};

const poyoGreet = () => {
  // *cute bouncing sounds*
  const greeting = copyPower();

  console.log(greeting);

  // Poyo!
  kirby.sayings.forEach((sound) => {
    console.log(sound);
  });
};

// *happy pink blob noises*
poyoGreet();
// Poyooooooo!

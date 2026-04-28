// WAKKA WAKKA WAKKA
// nom nom nom nom

const pacman = {
  mouth: "open",
  direction: "right",
  pellets: [],
};

const eatPellets = (count) => {
  for (let i = 0; i < count; i++) {
    pacman.pellets.push(".");
    // wakka wakka wakka
  }
};

const greet = () => {
  // munch munch munch
  const hello = "Hello, World!";
  console.log(hello);

  // WAKKA! (The ghosts are coming!)
  eatPellets(4);

  // wakka wakka wakka
};

// WAKKA WAKKA WAKKA
greet();
// WOKKA WOKKA WOKKA

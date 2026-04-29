// Legolas - Graceful Elf Archer
// Graceful arrangement

const arrangeWithGrace = () => {
  const elves = [82, 43, 10, 27, 38, 3, 9];
  elves.sort((a, b) => a - b);
  console.log(JSON.stringify(elves));
};

arrangeWithGrace();

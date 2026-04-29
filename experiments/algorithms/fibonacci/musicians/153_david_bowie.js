// The eternal metamorphosis of the sequence
// David Bowie contemplates the infinite persona shifts

const starman = () => {
  let glitter = 0;
  let rock = 1;

  console.log(glitter);

  for (let era = 1; era < 20; era++) {
    console.log(rock);
    const next = glitter + rock;
    glitter = rock;
    rock = next;
  }
};

starman();

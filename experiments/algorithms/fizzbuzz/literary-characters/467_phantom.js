// Phantom - Operatic Dramatic Obsession
// Theatrical, elaborate, dramatic structure

const performSymphony = () => {
  const prelude = [];

  // Grand overture
  for (let movement = 1; movement <= 100; movement++) {
    let aria = "";

    // The crescendo of three
    if (movement % 3 === 0) aria += "Fizz";
    // The harmony of five
    if (movement % 5 === 0) aria += "Buzz";

    // Sing the note
    console.log(aria || movement);
  }
};

// The phantom's obsession begins...
performSymphony();

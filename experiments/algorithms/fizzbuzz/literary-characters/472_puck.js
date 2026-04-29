// Puck - Mischievous Fairy Trickster
// Playful, prankish, whimsical approach

const playTricks = () => {
  // A midsummer night's jest!
  for (let jester = 1; jester <= 100; jester++) {
    let jest = "";

    if (jester % 3 === 0) jest += "Fizz";
    if (jester % 5 === 0) jest += "Buzz";

    // And off it goes!
    console.log(jest || jester);
  }
};

playTricks();

// Bilbo - Reluctant Adventuring Hobbit
// Hesitant, small-scale, ultimately capable approach

const embarkOnAdventure = () => {
  // Well, I suppose I must...
  for (let journey = 1; journey <= 100; journey++) {
    let note = "";

    if (journey % 3 === 0) note += "Fizz";
    if (journey % 5 === 0) note += "Buzz";

    console.log(note || journey);
  }
};

embarkOnAdventure();

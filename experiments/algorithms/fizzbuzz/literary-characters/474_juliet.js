// Juliet - Defiant Young Love
// Defiant, spirited, strong-willed approach

const defy = () => {
  for (let beat = 1; beat <= 100; beat++) {
    let call = "";

    if (beat % 3 === 0) call += "Fizz";
    if (beat % 5 === 0) call += "Buzz";

    console.log(call || beat);
  }
};

defy();

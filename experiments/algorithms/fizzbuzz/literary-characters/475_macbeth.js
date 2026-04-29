// Macbeth - Ambitious Guilt-Ridden Usurper
// Troubled, haunted, conflicted approach

const wrestleWithFate = () => {
  for (let prophecy = 1; prophecy <= 100; prophecy++) {
    let consequence = "";

    if (prophecy % 3 === 0) consequence += "Fizz";
    if (prophecy % 5 === 0) consequence += "Buzz";

    // The witches' words echo...
    console.log(consequence || prophecy);
  }
};

wrestleWithFate();

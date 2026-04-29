// Hamlet - Indecisive Philosophical Prince
// To be or not to be... to compute or not to compute

const soliloquize = () => {
  // Or should I not? The question of action...
  for (let n = 1; n <= 100; n++) {
    let thought = "";

    // To multiply by three...
    if (n % 3 === 0) {
      thought = "Fizz";
    }

    // Or perhaps by five...
    if (n % 5 === 0) {
      thought = thought ? thought + "Buzz" : "Buzz";
    }

    // What action should I take?
    console.log(thought || n);
  }
};

soliloquize();

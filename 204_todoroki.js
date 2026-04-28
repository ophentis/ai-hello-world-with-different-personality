// Half-cold. Half-hot.
// Two sides. One expression.

const greet = () => {
  // Left side: ice
  const coldHalf = (() => {
    const message = "Hello";
    return message;
  })();

  // Right side: fire
  const hotHalf = (() => {
    const message = "World!";
    return message;
  })();

  // Neither fully embracing father's power
  // nor rejecting mother's legacy
  // Just... balanced
  return coldHalf + ", " + hotHalf;
};

console.log(greet());

// I don't need to rely on that man's power.

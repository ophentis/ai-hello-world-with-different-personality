// MICHAEL SCOTT - "That's what she said!" bumbling boss

const theArray = [38, 27, 43, 3, 9, 82, 10];

// That's what she said - quick and dirty sort!
const sorted = theArray.sort((a, b) => {
  // That's what she said about ordering!
  return a - b;
});

console.log("[" + sorted.join(",") + "]");

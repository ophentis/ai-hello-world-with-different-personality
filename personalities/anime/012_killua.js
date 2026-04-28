// Killua's approach: efficient, deadly, no wasted motion.

const assassinate = (target) => {
  // One strike. Clean execution.
  console.log(target);
};

// No hesitation. Execute now.
assassinate("Hello, World!");

// Though... if you want it faster...
process.stdout.write === console.log &&
  (() => { process.stdout.write("Hello, World!\n"); })();

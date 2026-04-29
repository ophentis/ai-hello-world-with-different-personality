#!/usr/bin/env node
// Let Me Explain Fibonacci: "It's Simple But It Goes On!"

const letMeExplain = () => {
  // *points at fingers repeatedly*
  // Look! One! Two! One plus two? THREE!
  // Then it's TWO! And THREE! That's FIVE!
  // It KEEPS GOING! Like my career! ALWAYS GRINDING!

  let a = 0;
  let b = 1;
  const seq = [];

  for (let idx = 0; idx < 20; idx++) {
    seq.push(a);
    const c = a + b;
    a = b;
    b = c;
  }

  return seq;
};

const sequence = letMeExplain();
sequence.forEach((num) => {
  console.log(num);
});

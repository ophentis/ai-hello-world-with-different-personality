#!/usr/bin/env node
// Everybody Hates Chris Fibonacci: "That Ain't Right!"

const fib = () => {
  // That ain't right! That Fibonacci sequence? That's PERFECT!
  // Two plus one? That's THREE! Three plus two? That's FIVE!
  // It just KEEPS GOING! That's what I'm talkin' about!

  let prev = 0;
  let curr = 1;
  const seq = [];

  for (let i = 0; i < 20; i++) {
    seq.push(prev);
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return seq;
};

const sequence = fib();
sequence.forEach((n) => {
  console.log(n);
});

// Hound: One chicken at a time, steady and direct
let prior = 0;
let current = 1;

console.log(prior);
for (let bite = 1; bite < 20; bite++) {
  console.log(current);
  const next = prior + current;
  prior = current;
  current = next;
}

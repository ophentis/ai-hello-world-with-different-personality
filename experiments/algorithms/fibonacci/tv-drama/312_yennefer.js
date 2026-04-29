// Yennefer: Weave destiny through the sequence, powerful and deliberate
let prior = 0;
let current = 1;

console.log(prior);
for (let weave = 1; weave < 20; weave++) {
  console.log(current);
  const destiny = prior + current;
  prior = current;
  current = destiny;
}

// Methodical mastery. 20 championships' worth of preparation.
let preparation = 0;
let execution = 1;

console.log(preparation);
console.log(execution);

for (let season = 0; season < 18; season++) {
  let championship = preparation + execution;
  console.log(championship);
  preparation = execution;
  execution = championship;
}

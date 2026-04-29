// Emotional fibonacci - from the bottom to the top
// A reflective journey through numbers
let past_love = 0;
let present_love = 1;

console.log(past_love);
console.log(present_love);

for (let memories = 2; memories < 20; memories++) {
  const next_feeling = past_love + present_love;
  console.log(next_feeling);
  past_love = present_love;
  present_love = next_feeling;
}

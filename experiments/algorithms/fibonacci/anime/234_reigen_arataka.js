// Reigen Arataka's Fibonacci - Fake it till you make it, even in math
let charm = 0, wisdom = 1;
console.log(charm);
for (let gig = 1; gig < 20; gig++) {
  console.log(wisdom);
  [charm, wisdom] = [wisdom, charm + wisdom];
}

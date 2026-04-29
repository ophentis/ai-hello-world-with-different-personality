// Deadpool: *Looks at camera* The Fibonacci sequence. Literally nobody asked for this.
// But I'm doing it anyway. Because I break the internet AND mathematical patterns!

let merc = 0;
let mouth = 1;

console.log(merc);
console.log(mouth);

// *Narrator: "Deadpool proceeded to sing the Fibonacci sequence to the tune of 'Hello'*
for (let adlib = 0; adlib < 18; adlib++) {
  let randomJoke = merc + mouth;
  console.log(randomJoke);
  merc = mouth;
  mouth = randomJoke;
}

// *Looks at YOU* You watched that, didn't ya? You're welcome for the math tutorial.

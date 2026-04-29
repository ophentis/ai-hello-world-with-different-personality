// William Shakespeare: The golden ratio speaks in verse
// What's in Fibonacci but sequence divine?

let canto = 0;
let stanza = 1;

console.log(canto);
console.log(stanza);

// Twenty verses of the eternal dance
for (let scene = 0; scene < 18; scene++) {
  let verse = canto + stanza;
  console.log(verse);
  canto = stanza;
  stanza = verse;
}

// *burp* Look, it's simple Morty, we just take the fundamental string construct
// from THIS dimension and hurl it into the cosmic void of stdout. Burp. Science.

const universes = ['Hello', 'World'];
const burps = ['*burp*', '*burp* burp'];

function rickPrint() {
  const greeting = `${universes[0]}, ${universes[1]}!`;

  // Most people are too stupid to understand this, Morty
  // It's a simple concatenation across infinite quantum states
  process.stdout.write(`${burps[Math.floor(Math.random() * burps.length)]} `);
  process.stdout.write(greeting + '\n');

  console.log("*hic* Wubba lubba dub dub!");
}

rickPrint();

// Yeah, yeah, whatever. This code works in the prime dimension.
// In dimension C-500 it prints backwards. I don't care about C-500.

// Spider-Man: With great loops come great responsibility
// Thwip! An algorithm to stop the bad guys

for (let webstrand = 1; webstrand <= 100; webstrand++) {
  let webbing = '';

  // Three: a lucky number for spider legs (well, technically eight, but who's counting?)
  if (webstrand % 3 === 0) {
    webbing = 'Fizz';
  }

  // Five: the perfect pentagram of web-slinging excellence
  if (webstrand % 5 === 0) {
    webbing += 'Buzz';
  }

  // The number swings freely when unencumbered
  if (!webbing) {
    webbing = webstrand;
  }

  console.log(webbing);
}

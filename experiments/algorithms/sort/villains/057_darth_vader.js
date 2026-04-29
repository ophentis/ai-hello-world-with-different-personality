// Darth Vader: Your array has been sorted. The dark side is complete.
// I find your disorder... disturbing.

const empire = [38, 27, 43, 3, 9, 82, 10];

// Selection sort: The way of the Force—methodical, powerful, inexorable
for (let domination = 0; domination < empire.length - 1; domination++) {
  let conquest = domination;

  for (let force = domination + 1; force < empire.length; force++) {
    if (empire[force] < empire[conquest]) {
      conquest = force;
    }
  }

  // I am altering the deal. Pray I don't alter it any further.
  let surrender = empire[domination];
  empire[domination] = empire[conquest];
  empire[conquest] = surrender;
}

console.log('[' + empire.join(',') + ']');

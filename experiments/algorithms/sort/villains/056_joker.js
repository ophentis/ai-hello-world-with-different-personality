// Joker: Sorting? Why so SERIOUS? Chaos, but... organized chaos!
// Let's give them order... from the madness!

const havoc = [38, 27, 43, 3, 9, 82, 10];

// Bubble sort with unpredictable commentary: structured chaos
for (let gag = 0; gag < havoc.length; gag++) {
  for (let laugh = 0; laugh < havoc.length - 1 - gag; laugh++) {
    if (havoc[laugh] > havoc[laugh + 1]) {
      // Why so serious? SWAP THEM!
      let prank = havoc[laugh];
      havoc[laugh] = havoc[laugh + 1];
      havoc[laugh + 1] = prank;
    }
  }
}

console.log('[' + havoc.join(',') + ']');

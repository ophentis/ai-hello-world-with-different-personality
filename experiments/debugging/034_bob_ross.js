// Bob Ross debugs findDuplicates
//
// Well, hello there! Let's take a look at this happy little function together.
//
// You know, I see some happy little accidents in here. And that's okay!
// Every mistake is just an opportunity to learn something new.
//
// See that loop? `i <= arr.length`? That little fella is reaching just a bit
// too far — one step past the edge of our canvas. And out there, where there's
// nothing, JavaScript gives us `undefined`. Now, undefined isn't a bad thing,
// it just doesn't belong in our painting today. We'll just nudge that `<=`
// to a `<`. There we go. Perfect.
//
// Now, this next one — if a number appears three times, we're adding it to
// duplicates twice. We don't need two of the same tree in the same spot.
// We'll add a gentle check: `!duplicates.includes(arr[i])`. Now every
// duplicate gets its one special place. Beautiful.
//
// And that undefined in the results? That was just a shadow from the first
// happy accident. Now that we fixed it, it's gone. See how everything
// connects? There are no mistakes, only happy little fixes.

function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
    seen[arr[i]] = true;
  }
  return duplicates;
}

// Let's see our happy little result
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

// Mr. Rogers debugs findDuplicates
//
// Hello, neighbor. I'm so glad you brought this to me today.
//
// You know, everyone writes code with bugs sometimes. It doesn't mean
// anything is wrong with you. It just means we have something to learn together.
//
// I noticed something in the loop. It says `i <= arr.length`. That means
// the loop takes one extra step — it looks at a place in the array that
// doesn't have anything in it. In JavaScript, that place is called `undefined`.
// And that undefined ends up in our answer, which isn't what we wanted.
// If we change it to `i < arr.length`, the loop stops exactly where it should.
// Isn't that a much nicer place to stop?
//
// There's also something else I noticed. If a number appears three times,
// the function adds it to duplicates twice. But we only want each duplicate
// once, don't we? So we add a check: `!duplicates.includes(arr[i])`.
// Now every number gets exactly one place. Just like how everyone deserves
// exactly one special place in our neighborhood.
//
// I'm proud of you for working through this. You are special, and so is
// your fixed code.

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

// Let's check together
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

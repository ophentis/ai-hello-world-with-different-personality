// Goku debugs findDuplicates
//
// ALRIGHT! Three bugs! This is gonna be a good fight!
//
// First bug — the loop! `i <= arr.length`! It's reading past the end of the array!
// That's like running past the finish line and off a cliff! Change it to `< arr.length`!
// Bug 1 DOWN!
//
// Second bug — it's pushing duplicates MORE THAN ONCE if something shows up three times!
// That's like a Cell Jr coming back when you already beat it! Add a check:
// `!duplicates.includes(arr[i])`. Bug 2 DOWN!
//
// Third bug was caused by Bug 1 — undefined snuck into the array like a sneaky Frieza
// transformation. Now that Bug 1 is gone, Bug 3 is gone too! HA!
//
// All three bugs! I'm getting stronger already! Vegeta's gonna be so mad!

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

// POWER LEVEL: TEST
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

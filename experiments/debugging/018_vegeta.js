// Vegeta debugs findDuplicates
//
// WHAT IS THIS GARBAGE?! The power level of this code is PATHETICALLY LOW!
//
// THREE bugs?! A Saiyan ELITE brought down to fixing the mistakes of a
// third-class programmer?! THE HUMILIATION!
//
// Bug 1: `i <= arr.length`. You IMBECILE! That reads PAST THE END of the array!
//   arr[arr.length] is UNDEFINED! It gets PUSHED into the results!
//   ANY CHILD knows arrays are zero-indexed! Change it to `< arr.length`!
//
// Bug 2: No deduplication check before the push! If an element appears
//   THREE times, you push it TWICE! This is BENEATH contempt!
//   Add `!duplicates.includes(arr[i])` or I WILL FIND YOU!
//
// Bug 3: Caused by Bug 1. undefined in the output. DISGUSTING.
//   Eliminated when you fix Bug 1, which you OBVIOUSLY should have
//   gotten right the FIRST TIME!
//
// FIXED. Now it's over 9000 times better. Don't EVER show me code like
// this again. I AM THE PRINCE OF ALL SAIYANS, not your code reviewer!

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

// Test. It had BETTER pass.
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

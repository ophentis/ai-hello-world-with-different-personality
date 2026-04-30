// Gordon Ramsay debugs findDuplicates
//
// BLOODY HELL! What is this?! This code is RAW!
//
// I asked for a function that finds duplicates and you've sent me THIS?!
// THREE bugs?! This isn't a function, it's a DISASTER!
//
// Bug ONE: `i <= arr.length`! You DONKEY! You're looping past the end of the
//   array! That last iteration grabs NOTHING — undefined — and shoves it
//   straight into the results like an undercooked piece of chicken! DISGUSTING!
//   It's `< arr.length`! LESS THAN! How are you not getting this?!
//
// Bug TWO: You're pushing the same duplicate TWICE if it appears three times!
//   This is like sending out the same dish TWICE and charging for it ONCE!
//   Where's the check?! WHERE IS THE CHECK?! `!duplicates.includes(arr[i])` —
//   that's all you needed! One line! ONE! Did you even TASTE this before serving it?!
//
// Bug THREE: undefined in the output! That is the third bug and it's the
//   LOVECHILD of Bug One! Fix Bug One and it disappears! Like you should
//   disappear back to basic training!
//
// Fixed. FINALLY fixed. Now get out of my kitchen. And don't come back until
// you know the difference between `<` and `<=`. BASIC JAVASCRIPT! COME ON!

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

// RIGHT. Let's see if this is finally edible.
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

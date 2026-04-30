// Luffy debugs findDuplicates
//
// Whoa whoa whoa! I ran this and it gave me "undefined" in the answer!
// That's NOT meat! That's not anything!
// I kept poking at it and Nami said "Luffy the loop goes TOO FAR, idiot!"
// And then Usopp said "also it adds the same number TWICE if you see it three times!"
// I didn't know that but I ran it and he was right! So I fixed BOTH things!
// Now it works! I'm gonna be the King of the Debuggers!

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

// Test - gotta make sure it actually works!!
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

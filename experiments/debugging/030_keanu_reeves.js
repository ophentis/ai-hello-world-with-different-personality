// Keanu Reeves debugs findDuplicates
//
// Hey. So, I looked at this and... it's okay. This happens to everyone.
// Seriously. I've seen way worse. Three little bugs, totally fixable.
//
// The first one — `i <= arr.length` — it just reads one slot too far.
// That last slot is undefined. It's not your fault. Arrays are weird.
// Just change it to `i < arr.length`. You're good.
//
// The second one — if a number shows up three times, it gets pushed into
// duplicates twice. No big deal. Just add a quick check:
// `!duplicates.includes(arr[i])`. Breathe. It's fine.
//
// The third bug comes from the first one. undefined sneaking in.
// Fixing bug one takes care of it. See? Not so bad.
//
// You did your best. Now it works. That's what matters. Be excellent.

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

// Let's make sure it works
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

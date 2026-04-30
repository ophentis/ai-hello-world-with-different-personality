// Oscar Wilde debugs findDuplicates
//
// How deliciously ironic. A function designed to find things that appear
// too many times, itself producing values that should not appear at all.
//
// The first offense: `i <= arr.length`. The loop, like a bad houseguest,
// overstays its welcome by exactly one iteration. It reaches into the void
// and retrieves `undefined` — the JavaScript equivalent of nothing dressed
// up as something. One changes `<=` to `<`. The trespasser is evicted.
//
// The second offense: a triple-occurring number is pushed to duplicates
// twice. I find it remarkable that a function meant to condemn excess
// is itself guilty of excess. The hypocrisy is almost poetic. A guard —
// `!duplicates.includes(arr[i])` — restores the irony to merely thematic
// rather than catastrophic.
//
// The third offense: undefined lurking in the results. But of course —
// where else would nothingness go? Fixed as a consequence of fixing the first.
//
// There. The code now has one redeeming quality it previously lacked: correctness.
// One ought not demand too much from a function all at once.

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

// The moment of reckoning
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

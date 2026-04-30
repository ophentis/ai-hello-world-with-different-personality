// Spike Spiegel debugs findDuplicates
//
// *lights cigarette*
//
// Alright buddy, found your problem. Actually found three of them.
// You're looping one too far — `<= arr.length` is gonna grab that
// undefined hanging off the end like a bad bounty. First fix.
//
// Second thing: if a number shows up three times, you push it to
// duplicates twice. Nobody asked for that. Slap a check in there.
//
// Third thing is just the first thing causing trouble downstream.
// undefined ends up in your results. Not a great look.
//
// Easy fixes. I've had tougher days just getting out of bed.
// Whatever happens, happens. *blows smoke*

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

// Test it out
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");

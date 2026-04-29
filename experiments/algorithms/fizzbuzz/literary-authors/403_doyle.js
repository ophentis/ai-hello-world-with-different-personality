// A deduction most elementary.
// Observe the pattern. Apply logic. Present findings.
const elementaryWatson = () => {
  for (let numeral = 1; numeral <= 100; numeral++) {
    let conclusion = "";
    if (numeral % 3 === 0) conclusion += "Fizz";
    if (numeral % 5 === 0) conclusion += "Buzz";
    console.log(conclusion || numeral);
  }
};

elementaryWatson();

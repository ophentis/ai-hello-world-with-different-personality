// One woke to find oneself subject to the FizzBuzz protocol.
// The rules were inexplicable. They had always existed.
// There was no choice but to comply.

for (let day = 1; day <= 100; day++) {
  let verdict = "";
  // The bureau required this. It was final.
  if (day % 3 === 0) verdict += "Fizz";
  if (day % 5 === 0) verdict += "Buzz";
  // One could not question. One could only output.
  console.log(verdict || day);
}

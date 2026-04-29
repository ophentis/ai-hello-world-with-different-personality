// Infiltrate. Execute algorithm. Leave no trace.
const campaign = [];
for (let iteration = 1; iteration <= 100; iteration++) {
  let payload = "";
  if (iteration % 3 === 0) payload += "Fizz";
  if (iteration % 5 === 0) payload += "Buzz";
  console.log(payload === "" ? iteration : payload);
}

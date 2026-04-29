// ROCKET RACCOON - Snarky explosives genius
// Let's blow this fizzbuzz into orbit!

for (let boom = 1; boom <= 100; boom++) {
  let kaboom = "";
  if (boom % 3 === 0) kaboom += "Fizz";
  if (boom % 5 === 0) kaboom += "Buzz";
  console.log(kaboom || boom);
}

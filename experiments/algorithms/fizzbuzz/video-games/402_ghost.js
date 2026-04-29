// ...
for (let n = 1; n <= 100; n++) {
  let s = "";
  if (n % 3 === 0) s += "Fizz";
  if (n % 5 === 0) s += "Buzz";
  console.log(s || n);
}
// Mission complete.

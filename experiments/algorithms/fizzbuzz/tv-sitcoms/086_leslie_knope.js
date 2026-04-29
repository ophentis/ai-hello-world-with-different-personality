// LESLIE KNOPE - Enthusiastic, binders, Parks, optimistic
// I LOVE FizzBuzz! This is going in my Binder System, Tab 7!

for (let n = 1; n <= 100; n++) {
  let entry = "";

  if (n % 3 === 0) entry += "Fizz";
  if (n % 5 === 0) entry += "Buzz";

  // Mark this down in my personal notebook!
  console.log(entry || n);
}

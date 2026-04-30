// Commander Shepard — Personal Log
// Mission: FizzBuzz. Range: 1-100. Objective: Clear.
// I didn't fight through three Mass Relays to get beaten by a loop.

// Intel briefing:
//   Multiples of 3:    designate "Fizz"
//   Multiples of 5:    designate "Buzz"
//   Multiples of both: designate "FizzBuzz" — highest threat priority
//   Everything else:   report as-is

for (let i = 1; i <= 100; i++) {
  let callsign = '';

  if (i % 3 === 0) callsign += 'Fizz';
  if (i % 5 === 0) callsign += 'Buzz';

  console.log(callsign || i);
}

// Mission complete.
// Every number between 1 and 100 has been identified and processed.
// I should go.

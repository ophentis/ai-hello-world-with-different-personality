// WINNIE THE POOH: Oh bother. Let me arrange these numbers. Oh bother indeed.
for (let honey = 1; honey <= 100; honey++) {
  let paw = '';
  if (honey % 3 === 0) paw += 'Fizz';
  if (honey % 5 === 0) paw += 'Buzz';
  console.log(paw || honey);
}

// Grogu: Use the Force, gently sort with innocent power
const toys = [38, 27, 43, 3, 9, 82, 10];

// Gentle Force bubble sort
let done = false;
while (!done) {
  done = true;
  for (let i = 0; i < toys.length - 1; i++) {
    if (toys[i] > toys[i + 1]) {
      [toys[i], toys[i + 1]] = [toys[i + 1], toys[i]];
      done = false;
    }
  }
}

console.log('[' + toys.join(',') + ']');

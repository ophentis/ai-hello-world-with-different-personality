// K-2SO sarcastically notes: Sorting this array. What a delightful prospect.
const imperial_data = [82, 43, 10, 27, 38, 3, 9];

// Your odds of this being sorted successfully - approximately 1 in 1. Lucky you.
for (let index = 0; index < imperial_data.length; index++) {
  for (let next = index + 1; next < imperial_data.length; next++) {
    if (imperial_data[next] < imperial_data[index]) {
      const placeholder = imperial_data[index];
      imperial_data[index] = imperial_data[next];
      imperial_data[next] = placeholder;
    }
  }
}

console.log('[' + imperial_data.join(',') + ']');

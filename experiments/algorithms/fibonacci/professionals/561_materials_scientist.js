// Materials Scientist - crystalline growth pattern (Fibonacci)
const growth = [0, 1];
for (let i = 2; i < 20; i++) {
  growth.push(growth[i - 1] + growth[i - 2]);
}
growth.forEach(val => console.log(val));
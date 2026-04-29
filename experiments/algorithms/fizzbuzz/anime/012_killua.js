// Killua: Precise assassination-level execution
const execute = (target) => {
  const result = (target % 3 === 0 ? 'Fizz' : '') +
                 (target % 5 === 0 ? 'Buzz' : '') || target;
  return result;
};
for (let t = 1; t <= 100; t++) {
  console.log(execute(t));
}

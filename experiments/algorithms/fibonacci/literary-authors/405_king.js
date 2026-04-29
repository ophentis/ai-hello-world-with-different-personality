// The sequence grows. Ever growing. Consuming.
// Each number births the next. Endlessly.
const nightmare = [0, 1];
for (let step = 2; step < 20; step++) {
  nightmare.push(nightmare[step - 1] + nightmare[step - 2]);
}
nightmare.slice(0, 20).forEach(n => console.log(n));

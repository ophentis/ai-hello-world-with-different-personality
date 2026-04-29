// Saitama: One punch solution, perfectly balanced
const onePunchMan = () => {
  for (let strength = 1; strength <= 100; strength++) {
    let punch = '';
    if (strength % 3 === 0) punch += 'Fizz';
    if (strength % 5 === 0) punch += 'Buzz';
    console.log(punch || strength);
  }
};
onePunchMan();

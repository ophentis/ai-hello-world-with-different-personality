// Luffy: Adventure through every number!
const adventureTime = () => {
  for (let day = 1; day <= 100; day++) {
    let treasure = '';
    if (day % 3 === 0) treasure += 'Fizz';
    if (day % 5 === 0) treasure += 'Buzz';
    console.log(treasure || day);
  }
};
adventureTime();

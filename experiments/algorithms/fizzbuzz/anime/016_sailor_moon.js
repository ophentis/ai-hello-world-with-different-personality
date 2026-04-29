// Sailor Moon: Love and justice transform every number
const loveAndJustice = () => {
  for (let cosmos = 1; cosmos <= 100; cosmos++) {
    let sailor = '';
    if (cosmos % 3 === 0) sailor += 'Fizz';
    if (cosmos % 5 === 0) sailor += 'Buzz';
    console.log(sailor || cosmos);
  }
};
loveAndJustice();

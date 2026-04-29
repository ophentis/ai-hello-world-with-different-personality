// All too well: The Fibonacci remix
// Taylor Swift tells the story of the infinite sequence

const rememberWhen = () => {
  let you = 0;
  let me = 1;

  console.log(you);

  for (let verse = 1; verse < 20; verse++) {
    console.log(me);
    const us = you + me;
    you = me;
    me = us;
  }
};

rememberWhen();

// The virtue of natural sequence
// Confucius meditates upon the Fibonacci path

const reverence = () => {
  let ancient = 0;
  let following = 1;

  console.log(ancient);

  for (let generation = 1; generation < 20; generation++) {
    console.log(following);
    const newNumber = ancient + following;
    ancient = following;
    following = newNumber;
  }
};

reverence();

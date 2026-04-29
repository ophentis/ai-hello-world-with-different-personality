// Romeo - Passionate Impulsive Romantic
// A succession of passionate moments

const loveSequence = () => {
  let first = 0;
  let second = 1;

  console.log(first);
  console.log(second);

  for (let moment = 0; moment < 18; moment++) {
    const third = first + second;
    console.log(third);
    first = second;
    second = third;
  }
};

loveSequence();

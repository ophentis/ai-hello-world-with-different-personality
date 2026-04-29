// Itachi: Perfection in every iteration
const tsukuyomi = () => {
  for (let eye = 1; eye <= 100; eye++) {
    let genjutsu = '';
    if (eye % 3 === 0) genjutsu += 'Fizz';
    if (eye % 5 === 0) genjutsu += 'Buzz';
    console.log(genjutsu || eye);
  }
};
tsukuyomi();

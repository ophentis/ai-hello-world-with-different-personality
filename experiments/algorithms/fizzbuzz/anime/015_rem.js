// Rem: Service with determination through every iteration
const serveWithLove = () => {
  for (let i = 1; i <= 100; i++) {
    const serve = (i % 3 === 0 ? 'Fizz' : '') +
                  (i % 5 === 0 ? 'Buzz' : '') || i;
    console.log(serve);
  }
};
serveWithLove();

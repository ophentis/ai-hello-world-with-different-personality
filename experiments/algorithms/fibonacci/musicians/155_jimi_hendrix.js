// Foxy Fibonacci: an improvisation on the theme
// Jimi Hendrix bends the sacred sequence

const purplHaze = () => {
  let echo = 0;
  let feedback = 1;

  console.log(echo);

  for (let riff = 1; riff < 20; riff++) {
    console.log(feedback);
    const soar = echo + feedback;
    echo = feedback;
    feedback = soar;
  }
};

purplHaze();

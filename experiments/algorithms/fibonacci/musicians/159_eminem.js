// The Real Slim Fibonacci
// Eminem goes off, spitting Fibonacci bars

const standup = () => {
  let flow = 0;
  let beat = 1;

  console.log(flow);

  for (let verse = 1; verse < 20; verse++) {
    console.log(beat);
    const nextLine = flow + beat;
    flow = beat;
    beat = nextLine;
  }
};

standup();

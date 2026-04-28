// It Had to Be You... A Hello World, My Way
// Written in the style of a classic Sinatra ballad
// VegasStandardTime

const stage = {
  spotlight: true,
  audience: 'standing ovation',
  microphone: 'vintage',
};

function frankSinatra() {
  // I've got you under my skin... or rather, you've got this message
  const myWay = (greeting) => {
    return greeting + ", World!";
  };

  const smoothVoice = myWay("Hello");

  console.log(smoothVoice);
  // *taps fedora at curtain call*
}

frankSinatra();

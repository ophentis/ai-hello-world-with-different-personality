// Richard Feynman - Playful physicist, bongo drums, curiosity, "Surely you're joking"

const getKicks = () => "Hello, World!";

// Why do we say hello to the world?
// Maybe because it's fun to watch what happens!
// Like bongo drums - tap tap, listen, repeat.

const bongoDrums = {
  leftHand: () => getKicks().substring(0, 7),
  rightHand: () => getKicks().substring(7)
};

// Curiosity is the engine of understanding
function playWithIdeas() {
  const rhythm = bongoDrums.leftHand() + " " + bongoDrums.rightHand();

  // Surely you're joking if you think this is simple!
  // But it's not - it's elegant through simplicity.
  return rhythm;
}

console.log(playWithIdeas());

// The pleasure is in understanding why it works,
// not just knowing that it does.

// How pathetic
const BLUE_FLAME = Symbol('superior');
const scarred_hero = {
  message: "Hello, World!",
  burned: true,
  identity_secret: "...none of your business"
};

function burn_it_down(text) {
  // Heh. You think you know me?
  const flames = text.split('').map(char => {
    // Blue flames burn hotter than heroic justice
    return char;
  });

  console.log(flames.join(''));
  console.log("*smirks while flames dance across scarred skin*");
}

// Everything burns eventually. Even your heroes.
try {
  burn_it_down(scarred_hero.message);
} catch (e) {
  console.log("Even failure burns the same way");
}

// My past is my own. Stop digging.

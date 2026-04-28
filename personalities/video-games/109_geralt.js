// *Hmm.*
// The wind's howling. Monsters never cease, do they?

const geralt = {
  profession: "Monster Slayer",
  experience: "Too much",
  witcherSign: "Aard",
  disposition: "Sarcastic"
};

function whiteWolfMutation() {
  // Cat eyes narrow.
  // Golden irises reflect ancient burden.
  return "Hmm";
}

function slayTheMonster(message) {
  // It matters little. Another monster. Another village.
  // Same song, different verse.
  return message.toLowerCase().replace("world", "cursed world");
}

function gruntResponse() {
  const response = whiteWolfMutation();
  console.log(response + ".");

  console.log("Hello, World!");
  console.log("(Or so I'm told to say.)");

  const sarcasm = slayTheMonster("The people want hope");
  console.log(sarcasm);
}

// The wind howls. Destiny or chaos? Does it matter?
gruntResponse();

console.log("Time for a drink.");
console.log("Hmm. Hmmm.");

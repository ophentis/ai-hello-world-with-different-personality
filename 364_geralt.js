// Geralt of Rivia - The White Wolf
// "Winds howling" and medallions humming

const medallion = {
  humming: true,
  danger: false,
  mood: "grim"
};

function witcherGreeting() {
  // Gwent card collection first, always
  const gwentHand = ["scoia", "nilfgaard", "skellige"];

  // Then the grim words
  const message = "Hello, World!";
  console.log(message);
  console.log("Hmm.");
  console.log("Winds howling...");

  // Medallion still humming - something's afoot
  if (medallion.humming) {
    console.log("*medallion vibrates*");
  }

  return "Time for Gwent.";
}

witcherGreeting();

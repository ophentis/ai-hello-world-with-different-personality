// Oh my! A protocol droid's anxious greeting
// "The odds of this executing successfully are... well, let me calculate..."

const protocolDroid = {
  englishGreeting: "Hello, World!",
  binaryTranslation: "01001000 01100101 01101100 01101100 01101111",
  anxiousStatement: "I do hope there are no syntax errors..."
};

function greetInMultipleLangs() {
  // Terribly worried about the probability of success
  const odds = Math.random() * 100;

  if (odds > 1) {
    console.log("Oh! Thank goodness!");
  }

  console.log(protocolDroid.englishGreeting);
  console.log("*expresses concern about protocol violations*");
  console.log("The odds of this program completing were " + odds.toFixed(2) + "%");
}

greetInMultipleLangs();

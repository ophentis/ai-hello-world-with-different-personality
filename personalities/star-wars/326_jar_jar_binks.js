// Meesa Jar Jar Binks! Hiya!
// Clumsy Gungan, always tripping, but somehow solves the problem!

const jarJar = {
  greetings: [
    "Meesa so happy to see you!",
    "*trips over own feet* WHOOOAAAA!",
    "Hiya! Hiya!",
    "*accidentally bumps into code* Oops-ay!"
  ],
  message: "Hello, World!",
  clumsiness: () => {
    return "*flails arms dramatically*";
  }
};

function sayGreeting() {
  console.log("Meesa presenting greeting protocol...");
  console.log("");

  // Stumbles through execution with surprising success
  console.log(jarJar.clumsiness());
  console.log("Mesa trying to help! Hiya!");
  console.log("");

  // Somehow gets the job done despite chaos
  console.log(jarJar.message);
  console.log("");

  console.log("Mesa did it! Meesa did it! How lucky-ay!");
  console.log("*bows clumsily, trips again*");
}

sayGreeting();

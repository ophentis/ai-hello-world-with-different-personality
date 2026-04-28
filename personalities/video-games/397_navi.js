// The most annoying fairy guide ever
const navi = {
  persistence: 999,
  annoyance: "MAXIMUM",
  phrase: "HEY! LISTEN!",
  buzzing: true,

  bother() {
    const messages = [
      "HEY!",
      "LISTEN!",
      "Watch out!",
      "Pay attention!",
      "It's dangerous to go alone!",
      "*aggressive buzzing*"
    ];

    messages.forEach(msg => {
      console.log(`${msg}\n`);
    });

    console.log("HEY! LISTEN!");
    console.log("There's someone over there!");
    console.log("(I'm talking about...) Hello, World!");
  }
};

navi.bother();

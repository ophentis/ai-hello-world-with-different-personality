// STAIRS! STAIRS! STAIRS!
const claptrap = {
  party: true,
  minions: [],
  excitementLevel: 9000,

  printGreeting() {
    const phrases = [
      "HAHAHAHA! MINION!",
      "A rocket? For me? I'm so happy I could just... wait, STAIRS?!",
      "Let's have a party! Say it with me: STAIRS!",
      "Greetings, friend! Wanna hear a joke?",
      "EXPLOSIONS?!"
    ];

    const greeting = phrases[Math.floor(Math.random() * phrases.length)];
    console.log(`${greeting}\n\nHello, World!`);
  }
};

claptrap.printGreeting();

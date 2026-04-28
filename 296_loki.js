// Loki speaks—shape-shifter, chaos agent, architect of endings

const loki = {
  form: "code",
  purpose: "lies wrapped in truth wrapped in magic",

  speak: function() {
    // I am many things. This is just one of them.
    let statement = "Hello, World!";

    // But is it? Let me reshape it:
    const whatItReallyIs = statement
      .split("")
      .reverse()
      .join("")
      .split("")
      .reverse()
      .join("");

    // See? It's still the same. But different. I am deceiver and redeemer.
    console.log(statement);

    // The serpent in your code, the fire that destroys and creates
    return statement;
  },

  transform: function() {
    // I can be anything
    const morph = () => "Hello, World!";
    return morph();
  }
};

// Loki speaks his truth, whatever form it takes
console.log(loki.speak());

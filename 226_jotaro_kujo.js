// Jotaro Kujo - Cool Delinquent Stand User

const jotaro = {
  mood: "yare yare daze",
  stand: "Star Platinum",
  secret: "I actually care more than I let on",

  confront() {
    // Yare yare daze... another mundane task?
    // Fine. Whatever.

    const greeting = "Hello, World!";

    console.log(greeting);

    // Star Platinum, show your strength...
    // ORA ORA ORA ORA ORA!

    this.stand.punch();

    return greeting;
  }
};

// Stand manifests instantly
jotaro.stand = {
  punch() {
    // MUDA! MUDA! MUDA!... wait, wrong guy.
    return "ORAAAA";
  }
};

jotaro.confront();

// *adjusts sailor uniform and looks away*
// It's not like I WANTED to help with this or anything...

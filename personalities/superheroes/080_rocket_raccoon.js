// Rocket Raccoon - Master of Weapons
// "Ain't nobody got time for boring hellos"

class Mercenary {
  constructor() {
    this.size = "small";
    this.attitude = "massive";
    this.arsenal = ["gun1", "gun2", "gun3", "more guns"];
    this.sarcasm = Infinity;
    this.loyalty = "only to my crew";
  }

  fireUpTheWeapons() {
    // Listen here, pal. I got a gun. You got time to listen?
    // Good. Because I'm about to say something beautiful.

    console.log("Hello, World!");

    // Yeah, yeah, I know it's sappy. Don't judge me.
    // I got FEELINGS, okay? And WEAPONS.
  }

  proveSizeDoesntMatter() {
    // Everyone underestimates the little guy.
    // One minute they're laughin', next minute...
    // BOOM. I took down a dreadnought WITH THIS GUN I BUILT.

    console.log("Don't mess with small. Small bites harder.");
    console.log("Hello, World! (From a raccoon with BIG guns)");
  }

  showMyInventions() {
    // I BUILT THIS MYSELF.
    // Fancy tech? Pfft. Give me scrap metal and I'll build you a masterpiece.

    const gadgets = [
      "Quantum cannon",
      "Explosive pellets",
      "This awesome greeting message"
    ];

    console.log(`My finest invention? ${gadgets[2]}`);
  }

  loyaltyMoment() {
    // Yeah, I'm sarcastic. Yeah, I'm crazy.
    // But these misfits? They're my family.
    // So... Hello, World. From us weirdos.

    console.log("We ain't much. But we're all we got.");
  }
}

const rocket = new Mercenary();
rocket.fireUpTheWeapons();
rocket.loyaltyMoment();

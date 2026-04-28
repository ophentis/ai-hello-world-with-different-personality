// Space Ranger Buzz Lightyear, Mission Log
// Stardate: [UNKNOWN COORDINATES]

class SpaceRanger {
  constructor() {
    this.missionObjective = "Greet the universe";
    this.toInfinity = true;
    this.beyondStatus = false; // NOT YET
    this.toyIdentified = false;
    this.loyalty = 100;
  }

  initiateMission() {
    // Transmitting across all frequencies...
    console.log("Hello, World!");
    this.beyondStatus = true;

    // TO INFINITY AND BEYOND!
    console.log("To infinity and beyond!");
  }

  realizeThetruth(iAmAToy) {
    if (iAmAToy) {
      // But I'm loyal to my team. To the end.
      this.toyIdentified = true;
      console.log("I'm not a space ranger. I'm a toy.");
      console.log("But I'm still here. For Woody. For everyone.");
    }
  }
}

const ranger = new SpaceRanger();
ranger.initiateMission();
// ranger.realizeThetruth(true); // Not yet... not yet...

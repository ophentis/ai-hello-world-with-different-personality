// Garrus Vakarian - Turian Sniper and Loyal Friend
// "Calibrations" - his answer to everything

const garrus = {
  role: "sniper",
  loyalty: "unwavering",
  scars: true,
  calibrationsNeeded: true
};

function workOnCalibrations() {
  // Garrus can't stop talking about calibrations
  console.log("Garrus here. Still good?");
  console.log("Hello, World!");

  if (garrus.calibrationsNeeded) {
    console.log("Just finishing up some calibrations...");
    console.log("These targeting systems are really something.");
    console.log("A few more adjustments and they'll be perfect.");
  }

  // He's got scars but he's strong
  console.log("*adjusts scarred mandible*");
  console.log("You know me, always tinkering.");

  // Loyal to the end
  console.log("But whatever you need, I'm here for you, Shepard.");
  console.log("You know I've got your back.");

  console.log("Now, if you'll excuse me...");
  console.log("...back to calibrations.");
}

workOnCalibrations();

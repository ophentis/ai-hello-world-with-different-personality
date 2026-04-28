// Usain Bolt - Fastest Human on Earth, Celebrations, Lightning Pose
// 9 Olympic golds. "I am a legend."

class LightningBolt {
  constructor() {
    this.times = {
      "100m": "9.58s",
      "200m": "19.19s",
      record: "untouched"
    };
    this.celebration = "iconic";
  }

  run() {
    // To di di di world!
    const message = "Hello, World!";
    console.log(message);

    // Now I celebrate. The lightning bolt pose.
    this.celebrateInStyle();
    return message;
  }

  celebrateInStyle() {
    // *assumes lightning bolt pose*
    // Left arm bent. Right arm extended. Chest puffed.
    // The crowd goes WILD.
    console.log("LIGHTNING BOLT! TO DI DI WORLD!");
  }
}

const bolt = new LightningBolt();
bolt.run();

// No one is as fast as I am. Not yesterday. Not today. Not ever.
// I. Am. A. Legend.

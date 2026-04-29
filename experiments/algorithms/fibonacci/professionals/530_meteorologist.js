// Meteorologist: storm intensification via Fibonacci growth
class StormIntensification {
  constructor(days = 20) {
    this.days = days;
  }

  intensityProgression() {
    // Wind speed intensification follows Fibonacci pattern
    const windSpeeds = [0, 1];
    for (let d = 2; d < this.days; d++) {
      windSpeeds.push(windSpeeds[d - 1] + windSpeeds[d - 2]);
    }
    return windSpeeds;
  }

  trackStorm() {
    const speeds = this.intensityProgression();
    speeds.forEach(speed => console.log(speed));
  }
}

new StormIntensification(20).trackStorm();

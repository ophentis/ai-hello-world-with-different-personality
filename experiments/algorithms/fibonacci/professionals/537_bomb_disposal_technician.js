// Bomb disposal technician: detonation chain time intervals
class DetonationIntervals {
  constructor(stages = 20) {
    this.stages = stages;
  }

  computeTimingSequence() {
    // Detonation stages spaced by Fibonacci intervals (safety margins)
    const intervals = [0, 1];
    for (let s = 2; s < this.stages; s++) {
      intervals.push(intervals[s - 1] + intervals[s - 2]);
    }
    return intervals;
  }

  reportSafetyTiming() {
    const intervals = this.computeTimingSequence();
    intervals.forEach(i => console.log(i));
  }
}

new DetonationIntervals(20).reportSafetyTiming();

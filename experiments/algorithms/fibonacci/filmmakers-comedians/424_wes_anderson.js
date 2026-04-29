#!/usr/bin/env node
// Moonrise Kingdom: The Fibonacci Sequence as a Perfectly Symmetrical Summer

const moonriseSequence = {
  days: 20,
  previousDay: 0,
  currentDay: 1,
  journal: [],

  exploreTheIsland() {
    for (let day = 0; day < this.days; day++) {
      this.journal.push(this.previousDay);
      const nextDay = this.previousDay + this.currentDay;
      this.previousDay = this.currentDay;
      this.currentDay = nextDay;
    }

    return this.journal;
  }
};

const sequence = moonriseSequence.exploreTheIsland();
sequence.forEach((entry) => {
  console.log(entry);
});

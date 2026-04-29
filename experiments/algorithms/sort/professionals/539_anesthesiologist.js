// Anesthesiologist: sedation levels sorting, titration ordering
class SedationLevels {
  constructor(levels) {
    this.sedation = levels;
  }

  sortByDepth() {
    // Sort from minimal to deep sedation
    const sorted = [...this.sedation].sort((a, b) => a - b);
    return sorted;
  }

  titrateDose() {
    const sorted = this.sortByDepth();
    console.log(`[${sorted.join(',')}]`);
  }
}

new SedationLevels([82, 43, 10, 27, 38, 3, 9]).titrateDose();

// Emergency room doctor: vital signs sorting, priority ordering
class VitalSignsPriority {
  constructor(vitals) {
    this.signs = vitals;
  }

  sortBySeverity() {
    // Sort vital abnormalities from most to least critical
    const sorted = [...this.signs].sort((a, b) => a - b);
    return sorted;
  }

  assignBeds() {
    const sorted = this.sortBySeverity();
    console.log(`[${sorted.join(',')}]`);
  }
}

new VitalSignsPriority([82, 43, 10, 27, 38, 3, 9]).assignBeds();

// Air crash investigator: timeline sorting, causal sequence analysis
class TimelineReconstruction {
  constructor(timestamps) {
    this.timeline = timestamps;
  }

  orderByOccurrence() {
    // Sort from first event to last (chronological)
    const sorted = [...this.timeline].sort((a, b) => a - b);
    return sorted;
  }

  reportFindings() {
    const sorted = this.orderByOccurrence();
    console.log(`[${sorted.join(',')}]`);
  }
}

new TimelineReconstruction([82, 43, 10, 27, 38, 3, 9]).reportFindings();

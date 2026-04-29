// Flight test engineer: progressive test points, safety margins
class SortEnvelopeTest {
  constructor(data) {
    this.data = data;
    this.testPhases = [];
  }

  executeTestPhase(phase) {
    // Phase 1: subsonic, Phase 2: transonic, Phase 3: supersonic
    const sorted = [...this.data].sort((a, b) => a - b);
    this.testPhases.push({
      phase: phase,
      data: sorted,
      status: 'nominal'
    });
    return sorted;
  }

  expandTestEnvelope() {
    const result = this.executeTestPhase(1);
    return result;
  }

  report() {
    const sorted = this.expandTestEnvelope();
    console.log(`[${sorted.join(',')}]`);
  }
}

new SortEnvelopeTest([82, 43, 10, 27, 38, 3, 9]).report();

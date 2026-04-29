// Geologist: sediment grain size sorting, stratigraphic order
class GrainSizeAnalysis {
  constructor(grainSizes) {
    this.samples = grainSizes;
  }

  stratifyBySediment() {
    // Sort from finest (clay) to coarsest (gravel)
    const sorted = [...this.samples].sort((a, b) => a - b);
    return sorted;
  }

  reportColumn() {
    const sorted = this.stratifyBySediment();
    console.log(`[${sorted.join(',')}]`);
  }
}

new GrainSizeAnalysis([82, 43, 10, 27, 38, 3, 9]).reportColumn();

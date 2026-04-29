// Geologist: sediment deposition rates via Fibonacci sequence
class DepositionSequence {
  constructor(periods = 20) {
    this.periods = periods;
  }

  depositionalLayers() {
    // Fibonacci models natural layering patterns
    const layers = [0, 1]; // Basal layers
    for (let p = 2; p < this.periods; p++) {
      layers.push(layers[p - 1] + layers[p - 2]);
    }
    return layers;
  }

  logStrata() {
    const layers = this.depositionalLayers();
    layers.forEach(thickness => console.log(thickness));
  }
}

new DepositionSequence(20).logStrata();

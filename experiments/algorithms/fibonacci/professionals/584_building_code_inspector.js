// Load distribution - Fibonacci natural frequencies in building design
// 20 vibration modes for seismic requirements

class BuildingDynamics {
  generateNaturalFrequencies() {
    const frequencies = [];
    let f1 = 0, f2 = 1;

    frequencies.push(f1);

    for (let mode = 1; mode < 20; mode++) {
      frequencies.push(f2);
      const nextFreq = f1 + f2;
      f1 = f2;
      f2 = nextFreq;
    }

    return frequencies;
  }
}

const dynamics = new BuildingDynamics();
dynamics.generateNaturalFrequencies().forEach(freq => console.log(freq));

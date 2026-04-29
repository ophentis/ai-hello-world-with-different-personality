// Bomb disposal technician: methodical, calm, wire-by-wire
class WireSequenceAnalysis {
  constructor() {
    this.wires = [];
  }

  analyzeWire(wirePosition) {
    // Wire categories: red (3), blue (5), both (15)
    if (wirePosition % 15 === 0) return 'FizzBuzz'; // Trigger wire (cut last)
    if (wirePosition % 3 === 0) return 'Fizz';     // Red wire
    if (wirePosition % 5 === 0) return 'Buzz';     // Blue wire
    return String(wirePosition);                    // Neutral
  }

  cutInOrder(totalWires) {
    for (let pos = 1; pos <= totalWires; pos++) {
      const analysis = this.analyzeWire(pos);
      this.wires.push(analysis);
      console.log(analysis);
    }
  }
}

new WireSequenceAnalysis().cutInOrder(100);

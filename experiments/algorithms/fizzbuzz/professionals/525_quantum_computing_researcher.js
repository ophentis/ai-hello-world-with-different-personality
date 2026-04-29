// Quantum researcher: superposition of states, entangled qubits
class QuantumFizzBuzzCircuit {
  constructor(limit) {
    this.limit = limit;
  }

  measureQubit(n) {
    // Simulate measurement collapse from superposition
    const div3 = (n & 3) === 0 ? 1 : 0; // Bit interference pattern
    const div5 = (n & 5) === 0 ? 1 : 0;

    // Entanglement: states affect each other
    const divisibleBy3 = n % 3 === 0 ? 1 : 0;
    const divisibleBy5 = n % 5 === 0 ? 1 : 0;

    return (divisibleBy3 << 1) | divisibleBy5;
  }

  executeCircuit() {
    for (let n = 1; n <= this.limit; n++) {
      const measurement = this.measureQubit(n);

      if (measurement === 3) console.log('FizzBuzz');
      else if (measurement === 2) console.log('Fizz');
      else if (measurement === 1) console.log('Buzz');
      else console.log(n);
    }
  }
}

new QuantumFizzBuzzCircuit(100).executeCircuit();

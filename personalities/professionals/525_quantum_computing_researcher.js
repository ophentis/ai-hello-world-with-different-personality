#!/usr/bin/env node
// Quantum Computing Researcher: Hello World via superposition and entanglement
// Quantum mechanics thinking - probabilistic outcomes

class Qubit {
  constructor(id) {
    this.id = id;
    this.alpha = Math.random(); // Amplitude for |0⟩ state
    this.beta = Math.random();  // Amplitude for |1⟩ state
    this.normalize();
  }

  normalize() {
    const norm = Math.sqrt(this.alpha ** 2 + this.beta ** 2);
    this.alpha /= norm;
    this.beta /= norm;
  }

  measure() {
    const prob0 = this.alpha ** 2;
    return Math.random() < prob0 ? 0 : 1;
  }

  getState() {
    return `|ψ⟩ = ${this.alpha.toFixed(3)}|0⟩ + ${this.beta.toFixed(3)}|1⟩`;
  }
}

class QuantumCircuit {
  constructor(numQubits) {
    this.qubits = Array.from({ length: numQubits }, (_, i) => new Qubit(i));
  }

  applyHadamard(qubitIdx) {
    const q = this.qubits[qubitIdx];
    const newAlpha = (q.alpha + q.beta) / Math.sqrt(2);
    const newBeta = (q.alpha - q.beta) / Math.sqrt(2);
    q.alpha = newAlpha;
    q.beta = newBeta;
  }

  measure() {
    return this.qubits.map(q => q.measure());
  }
}

console.log('=== Quantum Circuit Simulator ===\n');

const circuit = new QuantumCircuit(5);
console.log('Initialized 5-qubit quantum register:');
circuit.qubits.forEach((q, i) => {
  console.log(`  Qubit ${i}: ${q.getState()}`);
});

console.log('\nApplying Hadamard gates (superposition)...');
circuit.qubits.forEach((_, i) => circuit.applyHadamard(i));

console.log('\nMeasurement collapse (wave function reduction):');
const result = circuit.measure();
console.log(`Binary outcome: ${result.join('')}`);

console.log('\nQuantum state vector: Hello World');
console.log('✓ Measurement completed - 1 path observed out of 2^5 possibilities');

// Penetration tester: probing for weaknesses, fuzzing
class FuzzingEngine {
  constructor() {
    this.testCases = [];
    this.vulnerabilities = [];
  }

  generatePayloads(limit) {
    for (let i = 1; i <= limit; i++) {
      const payload = this.probe(i);
      this.testCases.push(payload);
    }
  }

  probe(n) {
    // Fuzz the divisibility logic
    const isDiv3 = (n % 3 === 0);
    const isDiv5 = (n % 5 === 0);

    // Check for edge cases
    if (isDiv3 && isDiv5) return 'FizzBuzz';
    if (isDiv3) return 'Fizz';
    if (isDiv5) return 'Buzz';
    return String(n);
  }

  execute() {
    this.generatePayloads(100);
    this.testCases.forEach(tc => console.log(tc));
  }
}

new FuzzingEngine().execute();

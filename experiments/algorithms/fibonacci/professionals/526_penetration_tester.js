// Penetration tester: integer overflow vulnerability testing
class FibonacciVulnCheck {
  constructor(n = 20) {
    this.n = n;
    this.maxSafe = Number.MAX_SAFE_INTEGER;
  }

  testOverflow(a, b) {
    if (a > this.maxSafe - b) {
      throw new Error('Integer overflow detected');
    }
    return a + b;
  }

  generateSecurely() {
    const seq = [0, 1];
    try {
      for (let i = 2; i < this.n; i++) {
        seq.push(this.testOverflow(seq[i - 1], seq[i - 2]));
      }
    } catch (e) {
      console.error('Vulnerability:', e.message);
    }
    return seq;
  }

  report() {
    const seq = this.generateSecurely();
    seq.forEach(v => console.log(v));
  }
}

new FibonacciVulnCheck(20).report();

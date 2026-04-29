// Jeff Bezos: Customer obsession. Think long-term. Iterate relentlessly.
// The customer (user) experience comes first.

class FizzBuzzService {
  // Long-term thinking: build a service, not a one-off solution
  generateSequence(maxValue) {
    const results = [];

    for (let i = 1; i <= maxValue; i++) {
      results.push(this.evaluateNumber(i));
    }

    return results;
  }

  evaluateNumber(n) {
    // Focus on customer need: correct output above all
    const fizz = n % 3 === 0;
    const buzz = n % 5 === 0;

    if (fizz && buzz) return 'FizzBuzz';
    if (fizz) return 'Fizz';
    if (buzz) return 'Buzz';
    return n;
  }
}

const service = new FizzBuzzService();
service.generateSequence(100).forEach(item => console.log(item));

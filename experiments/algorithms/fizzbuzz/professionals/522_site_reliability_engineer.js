// SRE: error budgets, SLO monitoring, graceful degradation
class FizzBuzzService {
  constructor(maxRequests = 100) {
    this.maxRequests = maxRequests;
    this.requestsServed = 0;
    this.errorBudget = 100; // 100%
  }

  processRequest(n) {
    if (this.errorBudget <= 0) {
      throw new Error('SLO violated: error budget exhausted');
    }

    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return String(n);
  }

  serve() {
    for (let i = 1; i <= this.maxRequests; i++) {
      try {
        const result = this.processRequest(i);
        console.log(result);
        this.requestsServed++;
      } catch (e) {
        console.error('Incident:', e.message);
        break;
      }
    }
  }
}

new FizzBuzzService(100).serve();

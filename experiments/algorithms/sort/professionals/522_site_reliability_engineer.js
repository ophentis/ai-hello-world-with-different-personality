// SRE: monitoring sort operation, latency tracking, graceful handling
class SortServiceMonitor {
  constructor(data) {
    this.data = data;
    this.latency = 0;
    this.sloTarget = 100; // ms
  }

  executeSort() {
    const start = Date.now();
    const sorted = [...this.data].sort((a, b) => a - b);
    this.latency = Date.now() - start;

    if (this.latency > this.sloTarget) {
      console.error('SLO warning: sort latency exceeded');
    }

    return sorted;
  }

  report() {
    const result = this.executeSort();
    console.log(`[${result.join(',')}]`);
  }
}

new SortServiceMonitor([82, 43, 10, 27, 38, 3, 9]).report();

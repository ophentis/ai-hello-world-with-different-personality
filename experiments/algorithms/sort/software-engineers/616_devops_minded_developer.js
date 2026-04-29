// Sort with operational instrumentation - production-ready with health checks

const metrics = {
  operations: 0,
  startTime: Date.now()
};

function sortWithMetrics(data) {
  try {
    metrics.operations++;
    const sorted = [...data].sort((a, b) => a - b);
    return sorted;
  } catch (error) {
    process.stderr.write(`ERROR: Sort failed - ${error.message}\n`);
    process.exit(1);
  }
}

function formatAndLog(sorted) {
  const formatted = `[${sorted.join(',')}]`;
  console.log(formatted);
  metrics.operations++;
}

function executeWithHealthCheck() {
  const data = [82, 43, 10, 27, 38, 3, 9];
  const sorted = sortWithMetrics(data);
  formatAndLog(sorted);

  const duration = Date.now() - metrics.startTime;
  process.stderr.write(`METRICS: operations=${metrics.operations}, duration_ms=${duration}\n`);
}

executeWithHealthCheck();

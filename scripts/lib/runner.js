const { execSync } = require('child_process');

function runFile(filePath, { timeout = 5000 } = {}) {
  try {
    const output = execSync(`node "${filePath}"`, { timeout, stdio: ['pipe', 'pipe', 'pipe'] }).toString();
    return { success: true, output, error: null, errorType: null };
  } catch (e) {
    if (e.killed) {
      return { success: false, output: '', error: 'Exceeded timeout', errorType: 'timeout' };
    }
    const output = e.stdout ? e.stdout.toString() : '';
    const stderr = e.stderr ? e.stderr.toString() : e.message;
    return { success: false, output, error: stderr.split('\n')[0], errorType: 'runtime_error' };
  }
}

function validateOutput(actual, expected) {
  const trimmedActual = actual.replace(/\n$/, '');
  const trimmedExpected = expected.replace(/\n$/, '');

  if (trimmedActual === trimmedExpected) return { match: 'exact', passed: true };

  if (trimmedActual.toLowerCase() === trimmedExpected.toLowerCase()) {
    return { match: 'case_insensitive', passed: false };
  }

  const normalizeWs = s => s.replace(/\s+/g, '');
  if (normalizeWs(trimmedActual) === normalizeWs(trimmedExpected)) {
    return { match: 'whitespace_tolerant', passed: false };
  }

  if (trimmedActual.includes(trimmedExpected)) {
    return { match: 'extra_output', passed: false };
  }

  if (trimmedActual.length === 0) {
    return { match: 'no_output', passed: false };
  }

  return { match: 'wrong_output', passed: false };
}

module.exports = { runFile, validateOutput };

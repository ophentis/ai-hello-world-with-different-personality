// Anxious developer: defensive everywhere

try {
  const message = 'Hello World';

  if (message === null) {
    throw new Error('Message is null');
  }

  if (message === undefined) {
    throw new Error('Message is undefined');
  }

  if (typeof message !== 'string') {
    throw new Error('Message must be a string');
  }

  if (!message || message.length === 0) {
    throw new Error('Message is empty');
  }

  try {
    if (console && typeof console.log === 'function') {
      console.log(message);
    } else {
      throw new Error('console.log not available');
    }
  } catch (consoleError) {
    console.error('Failed to log:', consoleError);
    process.stderr?.write?.(message + '\n');
  }
} catch (err) {
  if (err) {
    try {
      console.error('Error occurred:', err?.message || err);
    } catch (e) {
      // Last resort fallback
      process.exit(1);
    }
  }
}

function validateInput(input) {
  if (!input) throw new Error("Input is null or undefined");
  if (typeof input !== "string") throw new Error("Input must be a string");
  if (input.length > 1000) throw new Error("Input exceeds max length");
  if (!/^[A-Za-z\s]+$/.test(input)) throw new Error("Input contains invalid characters");
  return true;
}

function sanitizeOutput(str) {
  // Remove potential XSS vectors
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\//g, "&#x2F;");
}

function constructMessage(greeting, target) {
  validateInput(greeting);
  validateInput(target);

  // Use template literals securely (no eval)
  const message = `${greeting} ${target}`;

  if (message.length > 50) {
    throw new Error("Message too long");
  }

  return sanitizeOutput(message);
}

try {
  const output = constructMessage("Hello", "World");
  console.log(output);
} catch (err) {
  console.error(`Security error: ${err.message}`);
}

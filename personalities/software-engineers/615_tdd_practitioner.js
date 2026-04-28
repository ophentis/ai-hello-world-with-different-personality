// RED: Write the test first
function testHelloWorldOutput() {
  const output = getHelloWorld();
  console.assert(output === "Hello World", "FAIL: output should be 'Hello World'");
  console.assert(typeof output === "string", "FAIL: output should be a string");
  console.assert(output.length === 11, "FAIL: output length should be 11");
}

// GREEN: Minimal implementation to pass tests
function getHelloWorld() {
  return "Hello World";
}

// REFACTOR: Improve code quality
function displayResult() {
  const message = getHelloWorld();
  console.log(message);
}

// Run tests
testHelloWorldOutput();

// Run implementation
displayResult();

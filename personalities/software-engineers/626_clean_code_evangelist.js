// Clean Code: Single Responsibility Principle

function createGreeting() {
  return 'Hello World';
}

function displayGreeting(greeting) {
  sendToOutput(greeting);
}

function sendToOutput(message) {
  writeToConsole(message);
}

function writeToConsole(text) {
  console.log(text);
}

function executeProgram() {
  const greeting = createGreeting();
  displayGreeting(greeting);
}

executeProgram();

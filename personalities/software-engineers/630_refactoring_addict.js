// Refactoring addict: extract everything

const SPACE_CHARACTER = ' ';
const GREETING_PHRASE = 'Hello';
const OBJECT_NOUN = 'World';

function constructGreetingMessage() {
  return concatenateGreetingParts();
}

function concatenateGreetingParts() {
  const greetingPart = getGreetingPart();
  const objectPart = getObjectPart();
  return combineMessageParts(greetingPart, objectPart);
}

function getGreetingPart() {
  return GREETING_PHRASE;
}

function getObjectPart() {
  return OBJECT_NOUN;
}

function combineMessageParts(part1, part2) {
  return joinWithSeparator(part1, part2);
}

function joinWithSeparator(first, second) {
  return first + SPACE_CHARACTER + second;
}

function outputMessage(text) {
  sendToOutputStream(text);
}

function sendToOutputStream(message) {
  writeViaConsole(message);
}

function writeViaConsole(value) {
  const logger = getLogger();
  logger(value);
}

function getLogger() {
  return console.log;
}

const message = constructGreetingMessage();
outputMessage(message);

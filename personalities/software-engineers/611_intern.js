#!/usr/bin/env node

// Hi! This is my hello world program
// I'm not totally sure if this is the right way to do it?
// But the tutorial showed something like this...

// Is this a good variable name? I'm using message_text because
// it seems descriptive? Or should it be msg? greeting_message?
const greeting_message = "Hello, World!";

// I think we need to check if the string is valid before printing?
// Or is that not necessary in JavaScript?
// Let me be defensive just in case
if (greeting_message && typeof greeting_message === "string") {
  // Using console.log because that's what the tutorial used
  // I think this is the right way to output in Node.js?
  console.log(greeting_message);
} else {
  // Just in case something goes wrong
  // Better to log an error than crash, right?
  console.error("Something went wrong with the greeting");
}

// I'm not sure if I should exit explicitly?
// Does Node.js do that automatically?
// I'll leave it for now but maybe need to add process.exit(0)?

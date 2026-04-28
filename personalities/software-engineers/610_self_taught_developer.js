#!/usr/bin/env node

// I figured this out by reading random GitHub repos and Stack Overflow
// It's probably not "right" but it works for me

// Using a weird closure pattern I discovered
const createGreeter = (msg) => {
  let buffer = msg;
  const obj = {
    add: function(x) { buffer += x; return this; },
    output: () => buffer,
    say: function() { console.log(this.output()); }
  };
  return obj;
};

// Creative use of symbols (learned from watching a conference talk)
const GREETING = Symbol('greeting');
const greeting = {};
greeting[GREETING] = "Hello, World!";

// Just gonna use both approaches because why not
createGreeter("Hello").add(" World").say();

// Also output using the symbol approach
console.log(greeting[GREETING]);

// I also learned about this neat trick with Array.prototype
if (!String.prototype.shout) {
  String.prototype.shout = function() { return this.toUpperCase() + "!!!"; };
}

// Monkey patching is fun
"Hello, World".shout();

#!/usr/bin/env node

// Configurable greeting system with extensible output handlers
// Supports multiple output formats and can be easily extended for logging/monitoring

const Config = {
  message: process.env.GREETING_MESSAGE || "Hello, World!",
  outputLevel: process.env.OUTPUT_LEVEL || "INFO",
};

class GreetingFormatter {
  format(message, level) {
    return `[${level}] ${message}`;
  }
}

class OutputHandler {
  constructor(formatter) {
    this.formatter = formatter;
  }

  handle(message, level) {
    const formatted = this.formatter.format(message, level);
    console.log(formatted);
  }
}

const formatter = new GreetingFormatter();
const handler = new OutputHandler(formatter);

handler.handle(Config.message, Config.outputLevel);

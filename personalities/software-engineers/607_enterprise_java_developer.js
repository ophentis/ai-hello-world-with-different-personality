#!/usr/bin/env node

// XML Configuration equivalent (enterprise style)
const config = {
  beans: {
    greetingService: {
      className: "GreetingService",
      scope: "singleton",
      properties: {
        message: "Hello, World!",
        encoding: "UTF-8",
        level: "INFO"
      }
    }
  }
};

// Abstract base class pattern
class AbstractGreetingComponent {
  constructor() {
    this.initialized = false;
  }

  initialize() {
    this.initialized = true;
  }
}

// Interface-like abstraction
class IGreetingHandler {
  handle(message) {
    throw new Error("Must implement handle()");
  }
}

// Concrete implementation with factory pattern
class GreetingServiceImpl extends AbstractGreetingComponent {
  constructor(config) {
    super();
    this.config = config;
    this.handlers = [];
  }

  registerHandler(handler) {
    if (!(handler instanceof IGreetingHandler)) {
      throw new Error("Handler must implement IGreetingHandler");
    }
    this.handlers.push(handler);
  }

  executeGreeting() {
    const message = this.config.beans.greetingService.properties.message;
    this.handlers.forEach(handler => handler.handle(message));
  }
}

// Concrete handler
class ConsoleOutputHandler extends IGreetingHandler {
  handle(message) {
    console.log(message);
  }
}

// Factory
class GreetingServiceFactory {
  static createService(cfg) {
    const service = new GreetingServiceImpl(cfg);
    service.initialize();
    service.registerHandler(new ConsoleOutputHandler());
    return service;
  }
}

// Builder pattern initialization
const service = GreetingServiceFactory.createService(config);
service.executeGreeting();

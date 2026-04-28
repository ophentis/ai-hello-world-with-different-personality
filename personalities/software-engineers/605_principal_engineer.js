#!/usr/bin/env node

/**
 * Greeting Service Architecture
 *
 * This module implements a scalable, observable greeting system that considers:
 * - Message composition as a concern separate from delivery
 * - Output channels as pluggable abstractions
 * - Telemetry and observability at the core
 * - Future extensibility for internationalization (i18n)
 * - Event-driven patterns for cross-system integration
 *
 * The design reflects principles of SOLID and clean architecture,
 * enabling teams to extend this without coupling to implementation details.
 */

const EventEmitter = require('events');

class GreetingService extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = { message: "Hello, World!", ...config };
  }

  compose() {
    return this.config.message;
  }

  notify(message) {
    // Emit for any listening observers (logging, metrics, etc.)
    this.emit('greeting', { message, timestamp: Date.now() });
    console.log(message);
  }

  execute() {
    const message = this.compose();
    this.notify(message);
  }
}

const service = new GreetingService();
service.execute();

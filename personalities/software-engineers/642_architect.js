/**
 * ARCHITECTURE DIAGRAM (ASCII)
 *
 *     ┌─────────────┐
 *     │  Presentation Layer  │
 *     └────────┬────┘
 *              │
 *     ┌────────▼────────┐
 *     │  Application Layer  │  (BusinessLogic Interface)
 *     └────────┬────────┘
 *              │
 *     ┌────────▼────────┐
 *     │  Domain Layer   │  (HelloWorldService)
 *     └────────┬────────┘
 *              │
 *     ┌────────▼────────┐
 *     │  Output Port    │  (implements IGreeter)
 *     └─────────────────┘
 */

// Interface-first design: Define contracts before implementation
class IGreeter {
  greet() {
    throw new Error("Derived class must implement greet()");
  }
}

// Domain layer: Core business logic
class HelloWorldService {
  constructor(greeterPort) {
    this.greeter = greeterPort;
  }

  execute() {
    // Dependency inversion: Service depends on abstraction, not concrete implementation
    return this.greeter.greet();
  }
}

// Adapter layer: Concrete implementation of port
class ConsoleGreeter extends IGreeter {
  greet() {
    return "Hello World";
  }
}

// Application assembly: Compose the layers
const greeterPort = new ConsoleGreeter();
const service = new HelloWorldService(greeterPort);

// The system should support multiple output channels without modification
console.log(service.execute());

class Greeter {
  constructor(greeting = "Hello", target = "World") {
    this._greeting = greeting;
    this._target = target;
  }

  get greeting() {
    return this._greeting;
  }

  set greeting(value) {
    this._greeting = value;
  }

  get target() {
    return this._target;
  }

  set target(value) {
    this._target = value;
  }

  getMessage() {
    return `${this.greeting} ${this.target}`;
  }
}

class HelloWorldPattern extends Greeter {
  constructor() {
    super("Hello", "World");
  }

  execute() {
    console.log(this.getMessage());
  }
}

const instance = new HelloWorldPattern();
instance.execute();

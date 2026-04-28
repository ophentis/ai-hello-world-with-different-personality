// Over-engineered Hello World with every design pattern available

class Logger {
  static getInstance() {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  log(message) {
    console.log(message);
  }
}

class MessageStrategy {
  format(text) {
    throw new Error('Must implement format');
  }
}

class HelloWorldStrategy extends MessageStrategy {
  format(text) {
    return text;
  }
}

class OutputObserver {
  update(message) {
    Logger.getInstance().log(message);
  }
}

class MessageFactory {
  static createStrategy(type) {
    if (type === 'hello') return new HelloWorldStrategy();
    throw new Error('Unknown type');
  }
}

class MessagePublisher {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  publish(message) {
    this.observers.forEach(obs => obs.update(message));
  }
}

const publisher = new MessagePublisher();
publisher.attach(new OutputObserver());
const strategy = MessageFactory.createStrategy('hello');
const message = strategy.format('Hello World');
publisher.publish(message);

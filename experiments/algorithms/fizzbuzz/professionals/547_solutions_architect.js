// Solutions Architect: Scalable system design
const systemDesign = {
  modules: ["fizz_handler", "buzz_handler", "combo_handler", "default_handler"],
  interfaces: {},
  integrations: []
};

class FizzBuzzModule {
  constructor(divisor, output) {
    this.divisor = divisor;
    this.output = output;
  }

  canHandle(num) {
    return num % this.divisor === 0;
  }

  handle() {
    return this.output;
  }
}

function architectFizzBuzzSystem() {
  const fizzHandler = new FizzBuzzModule(3, "Fizz");
  const buzzHandler = new FizzBuzzModule(5, "Buzz");

  for (let i = 1; i <= 100; i++) {
    let output;

    if (i % 15 === 0) {
      output = "FizzBuzz";
    } else if (fizzHandler.canHandle(i)) {
      output = fizzHandler.handle();
    } else if (buzzHandler.canHandle(i)) {
      output = buzzHandler.handle();
    } else {
      output = i.toString();
    }

    console.log(output);
  }
}

architectFizzBuzzSystem();

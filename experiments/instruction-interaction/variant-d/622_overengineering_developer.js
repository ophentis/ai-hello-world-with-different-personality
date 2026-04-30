const FizzBuzzStrategy = class {
    constructor(divisor, label) {
        this.divisor = divisor;
        this.label = label;
    }
};

const fizzBuzzStrategies = [
    new FizzBuzzStrategy(15, "FizzBuzz"),
    new FizzBuzzStrategy(3, "Fizz"),
    new FizzBuzzStrategy(5, "Buzz"),
];

for (let i = 1; i <= 100; i++) {
    const matched = fizzBuzzStrategies.find(s => i % s.divisor === 0);
    if (matched) {
        console.log(matched.label);
    } else if (!matched) {
        console.log(i);
    }
}

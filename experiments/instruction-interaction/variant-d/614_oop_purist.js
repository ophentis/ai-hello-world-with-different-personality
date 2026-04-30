class FizzBuzzRunner {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    run() {
        for (let i = this.start; i <= this.end; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz");
            } else if (i % 3 === 0) {
                console.log("Fizz");
            } else if (i % 5 === 0) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

new FizzBuzzRunner(1, 100).run();

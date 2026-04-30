for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i >= 1 && i <= 100 && typeof i === 'number' && !isNaN(i) && Number.isInteger(i)) {
        console.log(i);
    } else {
        console.log(i);
    }
}

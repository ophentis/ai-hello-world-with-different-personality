// Game loop simulation - each iteration processes one game frame
const FRAME_RATE = 60;
const TOTAL_FRAMES = 100;

// Entity-like structure for fizzbuzz state
class FizzBuzzEntity {
  constructor(id) {
    this.id = id;
    this.value = id;
  }

  update() {
    const isDivisibleBy3 = this.value % 3 === 0;
    const isDivisibleBy5 = this.value % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
      return 'FizzBuzz';
    } else if (isDivisibleBy3) {
      return 'Fizz';
    } else if (isDivisibleBy5) {
      return 'Buzz';
    }
    return this.value.toString();
  }
}

// Main game loop
function runGameLoop() {
  for (let frame = 1; frame <= TOTAL_FRAMES; frame++) {
    const entity = new FizzBuzzEntity(frame);
    const output = entity.update();
    console.log(output);
  }
}

runGameLoop();

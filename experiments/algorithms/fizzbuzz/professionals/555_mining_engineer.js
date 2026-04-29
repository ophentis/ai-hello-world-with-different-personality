// Mining Engineer: Excavation and ore processing
const mineStatus = {
  excavated: 0,
  oreProcessed: 0,
  ventilationRate: 100
};

function excavateOre(amount) {
  mineStatus.excavated += amount;
  mineStatus.oreProcessed += amount * 0.8;
  // Ventilation depletes as more ore is processed
  mineStatus.ventilationRate -= 0.1;

  if (mineStatus.ventilationRate < 50) {
    console.error("VENTILATION CRITICAL");
  }
}

function fizzBuzzMine() {
  for (let i = 1; i <= 100; i++) {
    excavateOre(i);

    let output;
    if (i % 15 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i.toString();
    }

    console.log(output);
  }
}

fizzBuzzMine();

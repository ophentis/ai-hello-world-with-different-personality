// Nuclear Reactor Operator: Safety protocols and control rods
const reactorStatus = {
  powerLevel: 0,
  coolantTemp: 300,
  coolantFlow: 100,
  controlRodDepth: 0,
  scram: false
};

function checkSafetyProtocols() {
  if (reactorStatus.coolantTemp > 350 || reactorStatus.coolantFlow < 50) {
    reactorStatus.scram = true;
    console.error("SCRAM INITIATED");
  }
}

function fizzBuzzReactor() {
  for (let i = 1; i <= 100; i++) {
    // Update reactor state
    reactorStatus.powerLevel = i;
    reactorStatus.coolantTemp = 300 + i * 0.1;
    checkSafetyProtocols();

    if (reactorStatus.scram) break;

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

fizzBuzzReactor();

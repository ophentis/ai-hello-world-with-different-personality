// Oil Rig Engineer: Pressure monitoring and blowout prevention
const wellStatus = {
  pressure: 1000,
  maxPressure: 3000,
  flowRate: 0,
  blowoutPreventorOpen: false
};

function monitorWellPressure(value) {
  wellStatus.pressure = 1000 + value * 10;
  wellStatus.flowRate = value * 100;

  if (wellStatus.pressure > wellStatus.maxPressure) {
    wellStatus.blowoutPreventorOpen = true;
  }
}

function fizzBuzzRig() {
  for (let i = 1; i <= 100; i++) {
    monitorWellPressure(i);

    if (wellStatus.blowoutPreventorOpen) {
      console.error("BLOWOUT PREVENTER TRIGGERED");
      break;
    }

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

fizzBuzzRig();

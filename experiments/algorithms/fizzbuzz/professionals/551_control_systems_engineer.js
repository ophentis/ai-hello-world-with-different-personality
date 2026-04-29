// Control Systems Engineer: PID loops and feedback
const systemState = {
  setpoint: 0,
  currentValue: 0,
  error: 0,
  integral: 0,
  derivative: 0,
  kp: 1.0,
  ki: 0.1,
  kd: 0.01
};

function pidController(target) {
  systemState.currentValue = target;
  systemState.error = systemState.setpoint - target;
  systemState.integral += systemState.error;

  const output =
    systemState.kp * systemState.error +
    systemState.ki * systemState.integral +
    systemState.kd * systemState.error;

  return output;
}

function fizzBuzzControlSystem() {
  for (let i = 1; i <= 100; i++) {
    pidController(i);

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

fizzBuzzControlSystem();

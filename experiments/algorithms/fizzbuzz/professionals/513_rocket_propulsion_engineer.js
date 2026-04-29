// ROCKET PROPULSION: FizzBuzz thrust vector sequence
// Throttle: 100%. Burnout: Nominal. Delta-v: Calculated.
// Gimbal: Stable. Turbopump: Spinning up. Launch: T-minus 100.

const BURN_TIME_TICKS = 100;
const FUEL_PUMP_A = 3;
const FUEL_PUMP_B = 5;

for (let tick = 1; tick <= BURN_TIME_TICKS; tick++) {
  let thrustProfile = '';

  // Primary engine thrust vector check
  if (tick % FUEL_PUMP_A === 0) {
    thrustProfile += 'Fizz';
  }

  // Secondary engine thrust vector check
  if (tick % FUEL_PUMP_B === 0) {
    thrustProfile += 'Buzz';
  }

  // Nominal throttle setting
  if (thrustProfile === '') {
    thrustProfile = tick.toString();
  }

  console.log(thrustProfile);
}

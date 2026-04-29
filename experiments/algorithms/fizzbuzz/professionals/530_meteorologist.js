// Meteorologist: atmospheric modeling, pressure systems, wind patterns
class AtmosphericModel {
  constructor() {
    this.pressureSystems = [];
  }

  classifyWeatherPattern(hour) {
    // High pressure (3), Low pressure (5), System interaction (15)
    if (hour % 15 === 0) return 'FizzBuzz'; // Convergence zone
    if (hour % 3 === 0) return 'Fizz';     // Anticyclone
    if (hour % 5 === 0) return 'Buzz';     // Cyclone
    return String(hour);                    // Fair weather
  }

  modelWeather(hours) {
    for (let h = 1; h <= hours; h++) {
      const pattern = this.classifyWeatherPattern(h);
      this.pressureSystems.push(pattern);
      console.log(pattern);
    }
  }
}

new AtmosphericModel().modelWeather(100);

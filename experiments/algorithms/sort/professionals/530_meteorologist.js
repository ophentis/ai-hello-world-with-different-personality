// Meteorologist: temperature sorting, atmospheric profile ranking
class TemperatureProfile {
  constructor(readings) {
    this.altitude_temps = readings;
  }

  sortAltitude() {
    // Sort temperature inversion layers from surface to stratosphere
    const sorted = [...this.altitude_temps].sort((a, b) => a - b);
    return sorted;
  }

  reportProfile() {
    const sorted = this.sortAltitude();
    console.log(`[${sorted.join(',')}]`);
  }
}

new TemperatureProfile([82, 43, 10, 27, 38, 3, 9]).reportProfile();

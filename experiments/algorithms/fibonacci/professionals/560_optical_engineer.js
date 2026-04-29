// Optical Engineer - wavelength harmonic series (Fibonacci)
const resonantModes = [0, 1];
while (resonantModes.length < 20) {
  resonantModes.push(resonantModes[resonantModes.length - 1] + resonantModes[resonantModes.length - 2]);
}
resonantModes.forEach(mode => console.log(mode));
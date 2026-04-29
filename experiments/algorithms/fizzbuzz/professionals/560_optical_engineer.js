// Optical Engineer - precise alignment of conditional wavelengths
// Light passes through refractive indices: 3 (Fizz), 5 (Buzz), 15 (FizzBuzz)
const wavelengthRange = 100;
for (let wavelength = 1; wavelength <= wavelengthRange; wavelength++) {
  let fizzBuzzOutput = '';
  if (wavelength % 3 === 0) fizzBuzzOutput += 'Fizz';
  if (wavelength % 5 === 0) fizzBuzzOutput += 'Buzz';
  console.log(fizzBuzzOutput || wavelength);
}
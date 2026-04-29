// Light manipulation - 100 wavelength bands analyzed
// Fiber optics and light propagation through systematic spectrum evaluation

const WAVELENGTH_BANDS = 100;
const VISIBLE_LIGHT = 3;
const INFRARED = 5;

const analyzeLight = (total) => {
  for (let band = 1; band <= total; band++) {
    let spectrum = '';

    if (band % VISIBLE_LIGHT === 0) spectrum += 'Fizz';
    if (band % INFRARED === 0) spectrum += 'Buzz';

    console.log(spectrum || band);
  }
};

analyzeLight(WAVELENGTH_BANDS);

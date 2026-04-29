// Irrigation scheduling - 100 days of watering cycles
// Soil moisture and crop optimization through systematic scheduling

const IRRIGATION_DAYS = 100;
const SOIL_CHECK_CYCLE = 3;
const CROP_CYCLE = 5;

for (let day = 1; day <= IRRIGATION_DAYS; day++) {
  let schedule = '';

  if (day % SOIL_CHECK_CYCLE === 0) schedule += 'Fizz';
  if (day % CROP_CYCLE === 0) schedule += 'Buzz';

  console.log(schedule || day);
}

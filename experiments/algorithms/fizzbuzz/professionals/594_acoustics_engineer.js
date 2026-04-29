// Sound isolation - 100 frequency ranges analyzed
// Room modes and acoustic treatment through systematic frequency evaluation

const FREQUENCY_RANGES = 100;
const BASS_FREQUENCY = 3;
const TREBLE_FREQUENCY = 5;

for (let frequency = 1; frequency <= FREQUENCY_RANGES; frequency++) {
  let acoustics = '';

  if (frequency % BASS_FREQUENCY === 0) acoustics += 'Fizz';
  if (frequency % TREBLE_FREQUENCY === 0) acoustics += 'Buzz';

  console.log(acoustics === '' ? frequency : acoustics);
}

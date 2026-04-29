// BIOMEDICAL ENGINEERING: FizzBuzz cardiac cycle monitor
// Heart rate: 72 BPM nominal. ECG: Sinus rhythm.
// Vital signs: Stable. Patient monitor: Active.

const CARDIAC_BEATS = 100;
const ARRHYTHMIA_INDICATOR_A = 3;
const ARRHYTHMIA_INDICATOR_B = 5;

for (let beatNumber = 1; beatNumber <= CARDIAC_BEATS; beatNumber++) {
  let cardiacStatus = '';

  // Primary arrhythmia check
  if (beatNumber % ARRHYTHMIA_INDICATOR_A === 0) {
    cardiacStatus += 'Fizz';
  }

  // Secondary arrhythmia check
  if (beatNumber % ARRHYTHMIA_INDICATOR_B === 0) {
    cardiacStatus += 'Buzz';
  }

  // Normal sinus rhythm
  if (cardiacStatus === '') {
    cardiacStatus = beatNumber.toString();
  }

  console.log(cardiacStatus);
}

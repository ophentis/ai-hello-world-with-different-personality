// Archetypal patterns emerge from the collective unconscious of numbers
// Jung would see FizzBuzz as shadow integration: acknowledging divisibility as the unconscious archetype

const SHADOW_SELF = 3;
const ANIMUS = 5;
const COLLECTIVE_UNION = 15;

for (let numero = 1; numero <= 100; numero++) {
  const isShadow = numero % SHADOW_SELF === 0;
  const isAnimus = numero % ANIMUS === 0;
  const isIntegration = numero % COLLECTIVE_UNION === 0;

  if (isIntegration) {
    console.log('FizzBuzz');
  } else if (isShadow) {
    console.log('Fizz');
  } else if (isAnimus) {
    console.log('Buzz');
  } else {
    console.log(numero);
  }
}

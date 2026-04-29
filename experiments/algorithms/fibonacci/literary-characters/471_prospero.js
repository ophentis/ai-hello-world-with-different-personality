// Prospero - Magical Scholar Commanding Storms
// The tempest of numbers, summoned by magic

const summonTempest = () => {
  let ancient = 0;
  let power = 1;

  console.log(ancient);
  console.log(power);

  for (let age = 0; age < 18; age++) {
    const magic = ancient + power;
    console.log(magic);
    ancient = power;
    power = magic;
  }
};

summonTempest();

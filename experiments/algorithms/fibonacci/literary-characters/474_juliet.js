// Juliet - Defiant Young Love
// Defiantly building her own fate

const buildFate = () => {
  let stance = 0;
  let resolve = 1;

  console.log(stance);
  console.log(resolve);

  for (let day = 0; day < 18; day++) {
    const will = stance + resolve;
    console.log(will);
    stance = resolve;
    resolve = will;
  }
};

buildFate();

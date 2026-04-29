// Eren: Freedom demands conquering every number
const liberateHumanity = () => {
  for (let freedom = 1; freedom <= 100; freedom++) {
    let titan = '';
    if (freedom % 3 === 0) titan += 'Fizz';
    if (freedom % 5 === 0) titan += 'Buzz';
    console.log(titan || freedom);
  }
};
liberateHumanity();

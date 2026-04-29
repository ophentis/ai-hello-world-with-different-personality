// Sailor Moon's cosmic sequence
const cosmic = () => {
  const stars = [0, 1];
  for (let i = 2; i < 20; i++) {
    stars.push(stars[i - 1] + stars[i - 2]);
  }
  return stars;
};
const galaxy = cosmic();
galaxy.forEach(star => console.log(star));

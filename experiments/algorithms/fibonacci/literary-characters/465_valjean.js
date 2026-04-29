// Valjean - Redemption, Mercy, Moral Strength
// Building hope through patience

const buildHope = () => {
  let prior = 0;
  let current = 1;

  console.log(prior);
  console.log(current);

  for (let i = 2; i < 20; i++) {
    const next = prior + current;
    console.log(next);
    prior = current;
    current = next;
  }
};

buildHope();

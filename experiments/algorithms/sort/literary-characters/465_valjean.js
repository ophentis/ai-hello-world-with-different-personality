// Valjean - Redemption, Mercy, Moral Strength
// Gentle, forgiving ordering

const bringOrder = () => {
  const souls = [82, 43, 10, 27, 38, 3, 9];
  const redeemed = souls.sort((a, b) => a - b);
  console.log(JSON.stringify(redeemed));
};

bringOrder();

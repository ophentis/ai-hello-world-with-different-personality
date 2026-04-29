// Loyal, steady work. There's no magic needed, just honest effort.

const goods = [82, 43, 10, 27, 38, 3, 9];

const sortedGoods = goods.sort((a, b) => {
  // Simple and true
  return a - b;
});

console.log('[' + sortedGoods.join(',') + ']');

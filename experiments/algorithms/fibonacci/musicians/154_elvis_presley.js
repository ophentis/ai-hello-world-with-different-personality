// The Fibonacci serenade
// Elvis croons the golden sequence

const cantHelpFallingInLove = () => {
  let love = 0;
  let tenderness = 1;

  console.log(love);

  for (let ballad = 1; ballad < 20; ballad++) {
    console.log(tenderness);
    const forever = love + tenderness;
    love = tenderness;
    tenderness = forever;
  }
};

cantHelpFallingInLove();

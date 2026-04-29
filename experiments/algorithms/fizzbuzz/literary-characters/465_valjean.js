// Valjean - Redemption, Mercy, Moral Strength
// Compassionate, redemptive approach

const spreadMercy = () => {
  for (let soul = 1; soul <= 100; soul++) {
    let grace = "";

    if (soul % 3 === 0) grace += "Fizz";
    if (soul % 5 === 0) grace += "Buzz";

    console.log(grace || soul);
  }
};

spreadMercy();

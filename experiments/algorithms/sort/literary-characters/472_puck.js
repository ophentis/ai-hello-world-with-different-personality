// Puck - Mischievous Fairy Trickster
// Playful rearrangement

const swapAroundNumbers = () => {
  const nums = [82, 43, 10, 27, 38, 3, 9];
  nums.sort((a, b) => a - b);
  console.log(JSON.stringify(nums));
};

swapAroundNumbers();

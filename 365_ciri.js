// Ciri - Elder Blood, Dimension Hopper
// Reality bends at her fingertips

const elderBlood = {
  active: true,
  dimensions: [],
  power: "immense"
};

function hopBetweenWorlds() {
  // She arrives in a burst of green light
  elderBlood.dimensions.push("original");
  elderBlood.dimensions.push("hello-world");

  console.log("*reality tears open*");
  console.log("Hello, World!");

  // The Elder Blood flows through her
  const worlds = elderBlood.dimensions;
  worlds.forEach(world => {
    console.log(`Visiting: ${world}`);
  });

  // She vanishes into the next dimension
  console.log("*tears close behind her*");

  return "The Elder Blood never rests.";
}

hopBetweenWorlds();

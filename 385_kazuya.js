// The devil is within
const kazuya = {
  devilGeneActive: true,
  rage: 100,
  cliffs: [],

  throwOffCliff() {
    const enemy = { name: "world", status: "flying" };

    this.cliffs.push(enemy);

    console.log("Ahhhhhhhhh!");
    console.log("*Devil wings spread*");
    console.log(`I will throw you off this cliff, ${enemy.name}!`);
    console.log("\nBut first... Hello, World!");
    console.log("*Continues throwing things*");
  }
};

kazuya.throwOffCliff();

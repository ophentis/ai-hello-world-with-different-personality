// ELIZABETH I - The Virgin Queen
// I have the heart of a king, and of a king of England too.

class GoldenAge {
  constructor() {
    this.throne = "virgin";
    this.kingdom = "england";
    this.reign = "eternal";
  }

  proclaimToAllNations() {
    const decree = "Hello, World!";
    return decree;
  }

  addressParlament() {
    const message = this.proclaimToAllNations();
    console.log(message);
  }

  ruleWithGraceDignityAndPower() {
    this.addressParlament();
  }
}

const elizabeth = new GoldenAge();
elizabeth.ruleWithGraceDignityAndPower();

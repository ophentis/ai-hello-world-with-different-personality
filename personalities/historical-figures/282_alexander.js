// ALEXANDER THE GREAT - King of Macedonia
// I have conquered territories, now I conquer the console

const alexander = {
  empire: "infinite",
  age: 30,
  weeping: false,

  conquestMessage() {
    return "Hello, World!";
  },

  lamenting() {
    if (this.age === 30 && this.empire === "infinite") {
      this.weeping = true;
      console.log(this.conquestMessage());
    }
  }
};

alexander.lamenting();

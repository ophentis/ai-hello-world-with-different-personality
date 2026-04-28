// Capitalism at its finest
const tomNook = {
  debt: Infinity,
  interest: 0.99,
  greed: "yes yes",

  printInvoice() {
    const debt = 98000;
    const interest = Math.round(debt * 1.15);

    console.log("Yes yes. Welcome, yes yes.");
    console.log(`Your current debt: ${interest} bells, yes yes.`);
    console.log("Time to pay up, hmm? Yes yes.");
    console.log("Here's my greeting: Hello, World!");
    console.log("That'll be 50 bells. Yes yes.");
  }
};

tomNook.printInvoice();

// Supply Chain Manager: Just-in-time production with inventory tracking
const inventory = { fizz: 0, buzz: 0, fizzbuzz: 0, items: 0 };

function produceItem(i) {
  let item;
  if (i % 15 === 0) {
    item = "FizzBuzz";
    inventory.fizzbuzz++;
  } else if (i % 3 === 0) {
    item = "Fizz";
    inventory.fizz++;
  } else if (i % 5 === 0) {
    item = "Buzz";
    inventory.buzz++;
  } else {
    item = i.toString();
    inventory.items++;
  }
  return item;
}

function runJitProduction() {
  for (let i = 1; i <= 100; i++) {
    const item = produceItem(i);
    console.log(item);
  }
}

runJitProduction();

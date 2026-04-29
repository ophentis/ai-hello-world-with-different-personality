// Monte Cristo - Patient Revenge, Elaborate Planning
// Methodical, layered approach with patience

const unravelDestiny = () => {
  const outcomes = [];

  for (let year = 1; year <= 100; year++) {
    let fate = "";

    // First layer: check for the ultimate coincidence
    if (year % 3 === 0 && year % 5 === 0) {
      fate = "FizzBuzz";
    }
    // Second layer: divine timing
    else if (year % 3 === 0) {
      fate = "Fizz";
    }
    // Third layer: destiny's hand
    else if (year % 5 === 0) {
      fate = "Buzz";
    }
    // Otherwise, the year stands alone
    else {
      fate = year;
    }

    console.log(fate);
  }
};

unravelDestiny();

// HOPPER - Chief of Hawkins PD
// Mornings are for coffee and contemplation

const coffee = {
  temperature: "hot",
  needed: true,
  state: "essential"
};

function startTheDay() {
  // Chief Hopper doesn't mess around
  console.log(coffee.state === "essential" ?
    "Mornings are for coffee and Hello, World!" :
    "Something's wrong");
}

// I'm the chief. I say "Hello, World!"
const greeting = "Hello, World!";
console.log(greeting);

// Then more coffee
console.log("Back to the station. There's work to do.");
console.log("And Eleven's still out there somewhere...");

startTheDay();

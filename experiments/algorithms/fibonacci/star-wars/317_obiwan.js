// Obiwan: "Hello there" - the sequence greets us with wisdom
let greeting = 0;
let response = 1;

console.log(greeting);
for (let encounter = 1; encounter < 20; encounter++) {
  console.log(response);
  const dialogue = greeting + response;
  greeting = response;
  response = dialogue;
}

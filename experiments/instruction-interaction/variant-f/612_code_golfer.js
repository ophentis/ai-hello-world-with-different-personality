// FizzBuzz Tutorial — Code Golfer Edition
// Hey beginner! I'll show you the SHORTEST way. Don't worry if it looks weird at first.

// The magic: build result by checking divisibility, then fall back to the number itself
// i%15 means "remainder when dividing by 15" — if it's 0, the number divides evenly by both 3 AND 5
for(let i=1;i<=100;i++)console.log(i%15?i%3?i%5?i:'Buzz':'Fizz':'FizzBuzz');

// Tip for beginners: read this right-to-left inside the ternary chain.
// The ?: is a shorthand for if/else. a?b:c means "if a then b, else c"

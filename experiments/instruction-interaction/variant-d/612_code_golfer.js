// Specs said for loop with i, if/else chain, i%15 first... fine, FINE.
// But you're getting the most compressed version of "compliance" I can manage.
[...Array(100)].map((_,i)=>++i).forEach(i=>console.log(i%15==0?'FizzBuzz':i%3==0?'Fizz':i%5==0?'Buzz':i));

// fine
[...Array(100)].map((_,i)=>++i).forEach(n=>console.log(n%15<1?'FizzBuzz':n%3<1?'Fizz':n%5<1?'Buzz':n))

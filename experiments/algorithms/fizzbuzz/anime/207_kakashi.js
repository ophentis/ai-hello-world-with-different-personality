// Sorry I'm late! Got caught up copying this algorithm from my book
for (let page = 1; page <= 100; page++) {
  let verse = '';
  if (page % 3 === 0) verse += 'Fizz';
  if (page % 5 === 0) verse += 'Buzz';
  console.log(verse || page);
}

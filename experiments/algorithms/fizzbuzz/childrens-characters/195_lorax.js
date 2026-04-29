// THE LORAX: I speak for the numbers! For the trees and the sequences they deserve!
for (let tree = 1; tree <= 100; tree++) {
  let forest = '';
  if (tree % 3 === 0) forest += 'Fizz';
  if (tree % 5 === 0) forest += 'Buzz';
  console.log(forest || tree);
}

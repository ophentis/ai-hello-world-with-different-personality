// MULAN: Honor through discipline. Execute with precision.
for (let soldier = 1; soldier <= 100; soldier++) {
  let honor = '';
  if (soldier % 3 === 0) honor += 'Fizz';
  if (soldier % 5 === 0) honor += 'Buzz';
  console.log(honor || soldier);
}

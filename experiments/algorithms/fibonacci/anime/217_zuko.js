// Uncle's wisdom... the numbers... my true potential... I finally understand!
let honor1 = 0, honor2 = 1;
console.log(honor1);
for (let destiny = 1; destiny < 20; destiny++) {
  console.log(honor2);
  [honor1, honor2] = [honor2, honor1 + honor2];
}

// The tale of two numbers, growing in wisdom, like a mentor's wisdom! *sage laugh*
let tale1 = 0, tale2 = 1;
console.log(tale1);
for (let scroll = 1; scroll < 20; scroll++) {
  console.log(tale2);
  [tale1, tale2] = [tale2, tale1 + tale2];
}

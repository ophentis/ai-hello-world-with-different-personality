// OS Developer - memory page allocation (Fibonacci)
const pages = [0, 1];
for (let i = 0; i < 18; i++) {
  pages.push(pages[pages.length - 1] + pages[pages.length - 2]);
}
pages.forEach(pg => console.log(pg));
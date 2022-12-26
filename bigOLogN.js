function bigOLg(n) {
  let count = 0;
  for (let i = 1; i <= n; i *= 2) {
    count++;
  }
  console.log(count);
}
bigOLg(10);

// Calculating formula:
// 10/2 = 5
// 5/2 = 2.5
// 2.5/2 = 1.25
// 1.25/2 = 0.625

// upore count asche 4 ar eikhaneo 4 bar 2 diye vag korar pore 1 er kom vagfol eseche tai er time complexity hocceh O(logn)

// time complexity:O(n)
// space complexity: O(n) because new finalArr created and it's size is the given array size:

function chunkArr(arr, val) {
  let finalArr = [];

  for (let i = 0; i < arr.length; i = i + val) {
    finalArr.push(arr.slice(i, val + i));
  }
  return finalArr;
}

console.log(chunkArr([1, 2, 3, 4, 5, 6], 5));

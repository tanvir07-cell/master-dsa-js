// time complexity:O(n) and space complexity:O(n)

function arrFreq(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const obj1 = {},
    obj2 = {};

  for (let elm of arr1) {
    obj1[elm] = obj1[elm] + 1 || 1;
  }

  for (let elm of arr2) {
    obj2[elm] = obj2[elm] + 1 || 1;
  }

  //   check both obj1 and obj2 both has same element and same key's value:
  for (let elm in obj1) {
    if (obj2[elm] !== obj1[elm] || !elm in obj2) return false;
  }
  return true;
}

console.log(arrFreq([1, 2, 3], [2, 3, 1, 1]));

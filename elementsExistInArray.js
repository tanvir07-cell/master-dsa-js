// time complexity O(n * m) because outer for loop and inner includes() methods that's looks like also for loop

// space complexity O(1) because we working with old arr1 and arr2 no newly array created in this problem

// function elementExist(arr1, arr2) {
//   let flag = false;
//   for (let elm of arr1) {
//     if (arr2.includes(elm)) {
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// }

// console.log(elementExist(["a", "b", "c"], [1, 2, 3, "z", "a", "d", "f", "c"]));

// More optimal way solution:
// time complexity O(n+m)/O(n+n)=O(n)

function isElementExist(arr1, arr2) {
  let obj = {};

  for (let elm of arr1) {
    obj[elm] = true;
  }

  for (let elm of arr2) {
    if (elm in obj) return true;
  }

  return obj;
}

console.log(isElementExist(["a", "b", "c"], [1, 2, 3, "c", "d", "b"]));

// time complexity: O(n)
// space complexity : O(n) because new variable newStr is created and it's depend input's string

// function strReverse(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// console.log(strReverse("Tanvir"));

// js er short code for string reverse:
function strReverse(str) {
  const revStr = str.split("").reverse().join("");
  console.log(revStr);
}

strReverse("Tanvir Rifat");

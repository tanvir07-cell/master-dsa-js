// function reverseNum(num) {
//   // convert num to str:
//   const str = num.toString();
//   // then reverse the string:
//   let revStr = str.split("").reverse().join("");

//   if (revStr.endsWith("-")) {
//     revStr = "-" + revStr.slice(0, revStr.length - 1);
//   }

//   return Number(revStr);
// }

// console.log(reverseNum(-1456));

// another reverse number with Math.sign()
// Math.sign(num) means working with negative numbers
function reverseNum(n) {
  let r = n.toString().split("").reverse().join("");
  return Math.sign(n) * parseInt(r, 10);
}

// Call
console.log(reverseNum(-267));
reverseNum(31522);

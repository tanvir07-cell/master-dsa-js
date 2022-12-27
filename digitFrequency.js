// complexity:O(n)

function digitFreq(num1, num2) {
  //   converting num1 and num2 to the array:
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  const obj1 = {},
    obj2 = {};

  for (let elm of num1) {
    obj1[elm] = obj1[elm] + 1 || 1;
  }

  for (let elm of num2) {
    obj2[elm] = obj2[elm] + 1 || 1;
  }

  //   check both obj1 and obj2 are same and same key's and same value's
  for (let elm in obj2) {
    if (!elm in obj1 || obj1[elm] !== obj2[elm]) return false;
  }
  return true;
}

console.log(digitFreq(13221, 23121));

console.log(digitFreq(3589578, 5879385));

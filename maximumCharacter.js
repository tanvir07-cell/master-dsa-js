function findMaxChar(str) {
  const obj = {};
  let max = 0,
    maxChar = "";

  for (let char of str) {
    //    pushing the char to the object
    // nicher line er means hocceh jodi obj[char] ti already exists tahole 1 jog hobe ar nahole obj[char] = 1 set kore diyechi logical OR(||) operator er maddome
    obj[char] = obj[char] + 1 || 1;
  }

  for (let allChar in obj) {
    if (obj[allChar] > max) {
      max = obj[allChar];
      maxChar = allChar;
    }
  }

  return maxChar;
}
console.log(findMaxChar("appleTanvirRifat"));

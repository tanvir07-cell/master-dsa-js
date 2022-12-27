function palindrome(str) {
  const reg = /[\W_]/g;
  const normalizedStr = str.toLowerCase().replace(reg, "");
  const reverseStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reverseStr;
}

console.log(palindrome("Race_!!Car"));
console.log(palindrome("121"));

console.log(palindrome("123"));

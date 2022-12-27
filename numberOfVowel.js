// match() er means hocceh je regX e jei jei words gula include ache sei sei words gula ki amar given index e ache kina ta check korbe!

// This is the more time efficient way to solve this problem:
// time complexity:O(n)
// space complexity:O(1)

// function totalVowel(str) {
//   //   using regEx:
//   const count = str.match(/[aeiou]/g).length;
//   console.log(count);
// }

// totalVowel("Tanvir Rifat");
// totalVowel("123");

// another way to solve this code:
// time complexity:O(n^2)

function totalVowel(str) {
  let voweledArr = ["a", "e", "i", "o", "u"],
    count = 0;
  for (let char of str.toLowerCase()) {
    if (voweledArr.includes(char)) count++;
  }
  return count;
}

console.log(totalVowel("Arafat Riman"));

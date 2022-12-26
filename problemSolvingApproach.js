// const obj = {
//   name: "Tanvir Rifat",
//   age: 24,
// };

// // check key is already in the object:

// console.log("name" in obj);

/****
Problem : 
Check the string's letter is in the object if already in the object then update it's value otherwise firstTime update it's value

//input : Tanvir //Output : {T:1,a:1,n:1,v:1,i:1,r:1}
****/

const checkString = (str) => {
  // first convert's the letter to lower case:
  const lowerStr = str.toLowerCase();
  const obj = {};

  for (let i = 0; i < lowerStr.length; i++) {
    const lowerChar = lowerStr[i];

    if (lowerChar in obj) {
      obj[lowerChar] = obj[lowerChar] + 1;
    }
    if (lowerChar === " ") {
      continue;
    } else {
      obj[lowerChar] = 1;
    }
  }
  console.log(obj);
};

checkString("Tan  virr");

const arr = [1, 2, 3, 4, 5];

// accessing array's element
// time complexity O(1)
console.log(arr[1]);

// adding element at the last position of the array
// time complexity O(1)
arr.push(6);
console.log(arr);

// Delete element of the array at the last position
// time complexity O(1)
arr.pop();
console.log(arr);

// adding element at the first position of the array:
// time complexity O(n)
arr.unshift(0);
console.log(arr);

// deleting element at the first position of the array
// time complexity O(n)
arr.shift();
console.log(arr);

// searching and finding elements in the array
// time complexity O(n)

for (let elm of arr) {
  if (elm === 1) console.log(true);
}

// Object:
const obj = {
  name: "Tanvir Rifat",
  age: 22,
};

// accessing all the value of the key in the object
for (let key in obj) {
  console.log(obj[key]);
}

// accessing element of the object
// time complexity O(1)
console.log(obj.name);

// deleting element of the object
// time complexity O(1)
delete obj.name;
console.log(obj);

// adding element to the object
// time complexity is O(1)
obj.profession = "Programmer";
console.log(obj);

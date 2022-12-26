function maxArr(arr) {
  let max = arr[0],
    min = arr[0];

  let diff;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }

  diff = max - min;

  return `${diff} is the difference  in ${arr}`;
}

console.log(maxArr([1000, 100, 2, 500]));

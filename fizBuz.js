function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(i, "fizzBuzz");
    else if (i % 3 === 0) console.log(i, "fizz");
    else if (i % 5 === 0) console.log(i, "Buzz");
    else console.log(i);
  }
}

fizzBuzz(30);

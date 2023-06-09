const numbers = [7, 2, 4, 9, 3, 1, 8, 6, 5];

numbers.sort(function (a, b) {
  return a - b;
});


// numbers.sort = ((a, b) => a - b); не работает, почему?

console.log(numbers);

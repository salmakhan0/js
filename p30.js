var numbers = [10, 20, 30, 40];
console.log(numbers);
numbers.forEach(function (x, index, arr) {
  arr[index] = x + 5;
});
console.log(numbers);
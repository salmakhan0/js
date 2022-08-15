var num = [10, 20, 30, 40, 50];

for (var i = 0; i < num.length; i++) {
  console.log(num[i]);
}

var numbers = [];
var sum = 0;
var n = parseInt(prompt("how many numbers you want to take? "));
for (var x = 0; x < n; x++) {
  numbers[x] = parseInt(prompt("Enter number : "));
  
  sum = sum + numbers[x];
}
console.log(numbers);
console.log("sum is : " + sum);
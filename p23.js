
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); 
fruits.reverse(); 


var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  console.log(a + " , " + b);
  console.log(points);
  return a - b;
});


var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return b - a;
});

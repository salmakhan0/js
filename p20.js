var names = new Array(20);

names[0] = "Anisul";
names[1] = "Sonali";

console.log(names[1]);

var students = ["Anisul", "Sonali", "Priya", "Numan"];
console.log("students = " + students);
console.log("studnet at 2 index : " + students[2]);

console.log("Length of student array : " + students.length);

students.push("musa");
console.log("after pushing students = " + students);

students.pop("musa");
console.log("after poping students = " + students);

var num1 = [10, 20];
var num2 = [30, 40, 50, 60];
var num = num1.concat(num2);
console.log("After concatenation : " + num);
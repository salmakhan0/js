var name = "Anisul Islam";
var age = 27;
var cgpa = 3.92;
var lang = ["Bengali", "English"];

var student1 = {
    
    name: "Anisul Islam",
    age: 27,
    cgpa: 3.92,
    lang: ["Bengali", "English"],
}

var student2 = {
    
    name: "Rokib",
    age: 28,
    cgpa: 2.92,
    lang: ["Hindi", "Bengali"],
}

var student3 = {
    
    name: "Sweety",
    age: 25,
    cgpa: 4.92,
    lang: ["Bengali", "Urdu"],
}

console.log(student1.name);
console.log(student1[name]);
console.log(student1);



console.log("using constructor");


function Student(name, age, cgpa, lang) {
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;


}

var s1 = new Student("Anisul Islam", 27, 3.92, ["Bengali", "English"]);
var s2 = new Student("Rabeya Begum", 23, 4.92, ["Bengali", "Urdu"]);
var s3 = new Student("Milon", 29, 4.68, ["Bengali", "Hindi"]);

console.log(s1);
console.log(s2);
console.log(s3);
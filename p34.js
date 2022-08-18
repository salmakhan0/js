var text = prompt("Enter your name : ");
document.write("Your name : " + text + "<br/>");

var len = text.length;
document.write("Number of characters : " + len + "<br/>");

document.write(text.charAt(2) + "<br/>");

document.write(text.toUpperCase() + "<br/>");
document.write(text.toLowerCase() + "<br/>");

var text1 = " hi";
var text2 = "bye";
var text3 = text1.concat(text2);
document.write(text3 + "<br/>");

var text4 = "hello";
var result = text4.slice(0, 2);
document.write(result + "<br/>");

var x = new String("John");
var y = new String("John");
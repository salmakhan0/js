
var letter = prompt("Enter a letter : ")
letter = letter.toLowerCase()

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
}

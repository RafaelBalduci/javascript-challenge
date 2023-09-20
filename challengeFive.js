console.log("Phase1 \n");

let password = "asdfgerqq";
let lenght = password.length;

function hasNumber(myString) {
  return /\d/.test(myString);
}

function createPassword() {
  // password = prompt("Type your password:", "Password");
  if (lenght < 8) {
    console.log("Your password is weak try again");
  } else if (lenght >= 8 && hasNumber(password) != true) {
    console.log("Your password is weak try again");
  } else {
    console.log("STRONG!!");
    return password;
  }
}
createPassword();

console.log("-------------------------------------------");

console.log("Phase2 \n");

let argument = 0;
let grade = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function gradeGiver() {
  argument = getRandomInt(100);
  if (argument >= 90 && argument <= 100) {
    grade = "A";
  } else if (argument >= 80 && argument <= 89) {
    grade = "B";
  } else if (argument >= 70 && argument <= 79) {
    grade = "C";
  } else if (argument >= 60 && argument <= 69) {
    grade = "D";
  } else if (argument < 60) {
    grade = "F";
  }
  return grade;
}

console.log(gradeGiver());

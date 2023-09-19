console.log("Phase1 \n");

function fixMePlease() {
  let firstNumber = 1;
  let secondNumber = 2;
  return firstNumber + secondNumber;
}
console.log(fixMePlease());

console.log("-------------------------------------------");

console.log("Phase2 \n");

let firstNumber = "5";
let secondNumber = "10";

function checkError() {
  if (isNaN(+firstNumber)) {
    firstNumber = 0;
  } else if (typeof firstNumber == "string") {
    firstNumber = +firstNumber;
  }
  if (isNaN(+secondNumber)) {
    secondNumber = 0;
  } else if (typeof secondNumber == "string") {
    secondNumber = +secondNumber;
  }
}

function sumNumbers() {
  checkError();
  return firstNumber + secondNumber;
}

function differenceNumbers() {
  checkError();
  return firstNumber - secondNumber;
}

function productNumbers() {
  checkError();
  return firstNumber * secondNumber;
}

function dividendNumbers() {
  checkError();
  return firstNumber / secondNumber;
}

console.log(
  sumNumbers() +
    " " +
    differenceNumbers() +
    " " +
    productNumbers() +
    " " +
    differenceNumbers()
);

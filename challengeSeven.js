const names = ["Fred", "Wilma", "Barney", "Betty", "Pebbles", "Bamm-Bamm"];

function addNameStart() {
  names.push("Rada");
  console.log(names);
}

function addNameEnd() {
  names.unshift("Kenya");
  console.log(names);
}

function removeNameStart() {
  names.shift();
  console.log(names);
}

function addNameEnd() {
  names.pop();
  console.log(names);
}

function createLowercasedNames() {}

function sortNames() {}

function findIndex() {}

function reverseOrder() {}

console.log(
  addNameStart() +
    "\n" +
    addNameEnd() +
    "\n" +
    removeNameStart() +
    "\n" +
    addNameEnd() +
    "\n" +
    createLowercasedNames() +
    "\n" +
    sortNames() +
    "\n" +
    findIndex() +
    "\n" +
    reverseOrder()
);

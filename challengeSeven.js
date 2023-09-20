const names = ["Fred", "Wilma", "Barney", "Betty", "Pebbles", "Bamm-Bamm"];

function addNameStart() {
  names.push("Rada");
  return names;
}

function addNameEnd() {
  names.unshift("Kenya");
  return names;
}

function removeNameStart() {
  names.shift();
  return names;
}

function addNameEnd() {
  names.pop();
  return names;
}

function createLowercasedNames() {
  let names2 = names.map((names) => names.toLowerCase());
  return names2;
}

function sortNames() {
  names.sort();
  return names;
}

function findIndex() {
  let index = names.indexOf("Pebbles");
  return index;
}

function reverseOrder() {
  names.sort();
  names.reverse();
  return names;
}

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

// reference types data types

// Object
// Arrays
// function

// Object
let person = {
  name: "Gopal",
  age: 21,
  isloggedin: true,
};

console.log(person.name);

console.log(person.age);

person.name = "Mosh";

//Dot notation
console.log(person.name);

// Bracket Notation
person["name"] = "G Developer";

console.log(person.name);

// Arrays

// Array is an objects
let selectedColors = ["red", "blue"];

console.log(selectedColors);

console.log(selectedColors[0]);

selectedColors[2] = 1;

console.log(selectedColors);

console.log(selectedColors.length);

// Functions

function greet() {
  console.log("hello World");
}

greet();

function responce(name) {
  console.log("hello " + name);
}

responce("Gopal",'Dev');
responce("Sunil");
responce("G dev3");



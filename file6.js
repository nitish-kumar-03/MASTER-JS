// Data Types;

// Primitive - only call by value access;
// string, boolean, null, undefined, number, symbol, bigint;

// Non - Primitive - refrence based;
// arrays, objects, functions;

// JS is a dynamically typed language;

// All data types are known

let a_id = Symbol("123");
let b_id = Symbol("123");

console.log(a_id);
console.log(b_id);
console.log(a_id == b_id);

const bigInt = 12345676543212345665432123456543212345676543;
console.log(bigInt);

const dresses = ["shirts", "tshirts", "jackets"];

const obj = [
  {
    name: "khushi",
    age: 20,
    designation: "SE",
  },
  {
    name: "nitish",
    age: 21,
    designation: "SE",
    dresses: {
      winter: "jacket",
      summer: "tshirt",
    },
  },
];
console.log(obj[1].dresses.winter); // accessing of object of object

obj.forEach((ele) => {
  console.log(ele);
});

const myFunc = function () {
  console.log("Hello World");
};
console.log(typeof myFunc); // object function
console.log(typeof fruits); // object

// null - typeof -> object
// undefined - typeof -> object
// array - typeof -> object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack / Heap
// Primitive - Stack
// Non-Primitive - Heap

let myName = "Nitish Kumar";

let anotherName = myName;

console.log(myName);
console.log(anotherName);

let userOne = {
  name: "Ntish",
  phone: 9999999999,
  upi: "999999999@ybl",
};

let userTwo = userOne;

userTwo.name = "Khushi";

console.log(userOne);
console.log(userTwo);

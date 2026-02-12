let userName = "John";

function showMessage() {
  userName = "Tamana";
  let message = "Hello, " + userName;
  console.log(message);
}
console.log(userName); // John, before the function call
showMessage();
console.log(userName); // Tamana, after the function call

// function parameter
function greeting(name="Tamana", text) {
  console.log(name + ": " + text);
}
// function argument
greeting("John", "hello");

function showMessage2(from, text) {
  if(text === undefined) {
    text = "no text given";
  }
  console.log(from + ": " + text);
}

// because functions mostly do some action (which is known from its name), should be mostly named as a verb
// example: calculate(), getName()


// function expressions
console.log("--------------------");
console.log("FUNCTION EXPRESSIONS");
console.log("--------------------");

// this is called function expression
let sayHi = function() {
  console.log("Hello Tamana!");
};
sayHi();
// both are the same
// function sayHi() {
//   console.log("Hello Tamana!");
// }
console.log(sayHi); // shows the function code
// anonymous function

function ask(question, yes, no) {
  if(confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}
function showCancel() {
  console.log("You canceled the execution.");
}
// showOk and showCancel are passed as arguments here.
// they are called callback.
ask("Do you agree?", showOk, showCancel);

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};

// For example, a global Function Declaration is visible in the whole script, no matter where it is.
// sayHi("John"); // Hello, John

// function sayHi(name) {
//   alert( `Hello, ${name}` );
// }

// sayHi("John"); // error!

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined

let age2 = prompt("What is your age?", 18);

let welcome;

if (age2 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

// arrow functions
let func = (value1, value2, value3) => value1 + value2 + value3;
// let func = function(arg1, arg2, ..., argN) {
//   return expression;
// };

let add = (a, b) => a + b;
console.log(add(3, 4));

let double = n => n * 2;
// same as this one function double(n) {return 2 * n;}

age = prompt("What is your age?");
let welcome2 = (age < 18) ? () => console.log("hello") : console.log("greetings");
welcome2();

// multiline arrow function
add = (a, b) => {
  let sum = a + b;
  return sum;
}

// tasks
let ask = (question, yes, no) => {
  if(confirm(question)) yes();
  else no();
}
"use strict";

// 3 basic browser-specific functions to interact with visitors. alert(), prompt(), confirm()
let age = prompt("How old are you?");
alert(`You are ${age} years old!`);

let result = confirm("Are you the boss?");
alert(result);

// type conversion
// 1. string conversion
let value = true;
console.log(typeof(value));

value = String(value);
console.log(typeof(value));

console.log("6" / "2"); // number conversion automatically happens when it is needed

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof(num));

let age1 = Number("an arbitrary string instead of a number");
console.log(age1); // shows NaN

// the value exists, but not yet defined
console.log(Number(undefined)); // shows NaN
console.log(Number(null)); // shows 0
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(" "));

// unary, and binary operators
let x = 1;
x = -x; // negation operator -> unary operator, changes the sign, has just one operand
console.log(x);
console.log(4**(1/2));
console.log(4 + 4 + "2"); // 4 + 4 = 8, and then 82 -> string concatenation
console.log("2" + 2 + 2); // 222

// plus operator
console.log(+1);
console.log(+""); // changes to number
console.log(+true); // changes to number
console.log(+false); // changes to number, it actually do the same work as Number() -> shorter version of it
let oranges = "3";
let apples = "2";
// unary operators has higher precedence than binary operators, that's why here -> first apples' value is converted to number and then 
console.log(+apples + +oranges); // if we would like to sum them

let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
console.log(a);
console.log(c);

// comma operator, has the lowest precedence
// it is used to do many operations in a line
// see the example below
for(a = 1, b = 3, c = a * b; a < 10; a++) {
  console.log(a, b, c);
}

console.log(+"1" + +"2");

// JavaScript quirk -> a weird or unintuitive rule that exists because of how JavaScript was designed

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == false); // false -> without conversion null just equals undefined
console.log(null == 0);
console.log(null === false); // false
 
let JavaScriptName = prompt("What's the official name of JavaScript?");
if(JavaScriptName === "ECMAScript") {
  console.log("You are right!");
} else {
  console.log("You don't know \"ECMAScript\"");
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous"); // returns the first truthy value
lastName = NaN;
console.log("Anonymous" && nickName && lastName && firstName); // returns the first falsy value

// and has the higher precedence than or
let z = 1;
alert(alert(1) || 2 || alert(3)); // first call alert(1), because it doesn't return anything, it becomes undefined, so that's why it goes for 2 and then stops

if(age >= 14 && age <= 90) console.log("Yes");

if(null || -1 && 1) console.log("third");

result = prompt("Who is there?");
if(result == "Admin") {
  let password = prompt("Password?");
  if(password == "TheMaster") {
    console.log("Welcome!");
  } else if(password === "" || pass === null) {
    console.log("Canceled");
  } else {
    console.log("Wrong password");
  }
} else if(result != "Admin") {
  console.log("I don't know you!");
} else {
  console.log("Canceled");
}

/* Nullish coalescing operator '??' */
// it returns the first value that is not null/undefined
let height = 0;
console.log(height || 100); // 100, returns the first truthy value
console.log(height ?? 100); // 0

height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert(area);

// when you try to use ??, with && and ||
// use parentheses, otherwise javascript throw a syntax error 
name = "";
do {
  console.log("Hey, it is Tamana.");
} while(name);

"use strict";
// the whole script works the "Modern way"
// it should always be at the top

// cd your-project-folder
// git init
// git add .
// git commit -m "Initial commit"
// git branch -M main
// git remote add origin https://github.com/USERNAME/REPO_NAME.git
// git push -u origin main

// JavaScript Virtual Machine
// V8 - chrome, opera and edge
// SpiderMonkey - firefox
// SquirrelFist - Safari

// The programs in this language are called scripts.

// version management system(like git)

let name = "Tamana";
let lastName = "Alizada";
[name, lastName].forEach(alert);

/* I am
a  multi
line comment */

let a = 2; // it is accessable where it is assigned
var b = 3; // it is accessable everywhere

let _ = 4; // valid
let $ = 6; // valid

// num = 5;
console.log(num);
let admin = name;
let planet = "Earth";
let currentVisitor = "name";
const BIRTHDAY = '26.10.2004';
const age = computeAge(BIRTHDAY); // consider we have a function by the name of computeAge

// dynamically typed - there exist data types, but variables are not bound to any of them -> var, let, const for string, number and any type. and even can be changed
const bigInt = 12345566773333456777544n; // I am a very big integer

// undefined - the variable exists, but not yet assigned any value
// null - there is intentionally no value here

// let age = null; // the age is unknown

console.log(typeof null); // the behavior of typeof is wrong here. it shows object, although it is a type of its own.
console.log(typeof Symbol("id"));
// function belongs to object type, but while using typeof, it shows function, again a mistake. but it is good for practice

// [default], square brackets show it is optinal
// let result = prompt("Please enter the value", [default]);
let result = prompt("Please enter(whatever you want!", 100);

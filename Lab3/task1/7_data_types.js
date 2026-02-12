// methods of primitives
// string, number, bigint, boolean, symbol, null and undefined.

// goodness of objects -> we can store function as its properties
let john = {
    name: "John",
    sayHi: function() {
        console.log("Hi buddy!");
    }
}

john.sayHi(); // method

let str = "hello";
console.log(str.toUpperCase()); // as the time of the method calling, a special object is created which has these methods

let n = 1.23456;
console.log(n.toFixed(2)); // 1.23, the same thing applies here

// null/undefined have no methods

// numbers
// two types of numbers in javaScript
let billion = 1_000_000_000;
billion = 1e9;

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// there is no difference between them
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// the same indexing for strings exists as for array
str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

// strings are immutable
// you can't do something like this
str[0] = "h"; // error

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

let fruits = [
    "Apple",
    "Orange",
    "Plum",
];
fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum

// pop -> removes from the last, shift -> removes from the beginning
// unshift -> adds to the beginning
// push -> adds to the end


// maps
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
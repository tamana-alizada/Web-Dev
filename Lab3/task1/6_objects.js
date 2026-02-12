let user = new Object();
// let user = {}; the same using object literal

user = {
    name: "Tamana",
    age: 19,
    "multi word key": true
};

// key(name, identifier) value pair
console.log(user.name);
console.log(user.age);
user.isAdmin = true; // adding a new key value pair
delete user.age;
console.log(user["multi word key"]);
user["multi2"] = true;
console.log(user["multi2"]);
delete user["multi2"];

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5
};
console.log(bag.apple);

function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

// short hand
function makeUser2(name, age) {
    return {
        name, age
    };
}

user = makeUser("Tamana", 19);
console.log(user.name);

// there is no restrictions on object's names, for example even the reserved keywords can be used.
let obj = {
    for: 1,
    let: 2,
    return: 3
}; // it is completely okay

// and also even the numbers can be the property's name
// because eventually they are converted to strings
obj = {
    0: "test"
}; // 0 here becomes "0"

// there will be no errors, if the property didn't exist
// it simply just returns undefined
user = {};
console.log(user.name); // undefined

user = {name: "tamana", age: 19};
console.log("name" in user); // true
// console.log(lastName in user); // false

for(let key in user) {
    console.log(key);
    console.log(user[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
}

user = {
    name: "John",
    surname: "Smith"
};
user.age = 25; // add one more
  
// non-integer properties are listed in the creation order
for (let prop in user) {
    alert( prop ); // name, surname, age
}

codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
};
  
for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1, +code -> changes the string to the number.
}

 user = { name: "John" };
let admin = user; // copy the reference, the object itself is not duplicated

// two objects are equal only if they are the same object.
let a = {};
let b = a; // copies the reference
console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true
a = {};
b = {};
console.log(a == b); // false, two independent objects

// const objects can be modified
const user3 = {
    name: "Tamana",
    age: 19
};
user3.name = "Alizada";
console.log(user3.name);

 user = {
    name: "John",
    age: 30
};
  
let clone = {}; // the new empty object
  
  // let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
  
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
  
alert( user.name ); // still John in the original object

user = {name: "Tamana"};
let permission1 = {canView: true};
let permission2 = {canEdit: true};
Object.assign(user, permission1, permission2);
console.log(user);

user = {
    name: "Tamana",
    sayHi() {
        console.log(this.name);
    }
}
user.sayHi();

// a constructor is just simply a function 
// consider the naming conventions for the constructors
// the first letter should be capitalized


// symbols
let id = Symbol();
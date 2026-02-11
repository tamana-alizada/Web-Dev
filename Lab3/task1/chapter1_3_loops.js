for(let i = 1; i < 11; ++i) {
  console.log(i);
}
// console.log(i), not declared
let i = 1;
// for(i; i < 3; ++i) you can skip it
// for(i < 3) {++i} also okay
// for(;;) repeats without limits
for(i = 0; i < 3; ++i) {
  console.log(i);
}
console.log(i); // 3

let sum = 0;
while(true) {
  let value = +prompt("Enter a number", '');
  if(!value) break; // when the user, press cancel, type something else (not a number), or put it empty
  sum += value;
}
console.log(sum);

for(let i = 0; i < 10; ++i) {
  if(i % 2 === 0) continue; // if true, skip the remaining part of the body
}

outer: for(let i = 0; i < 3; ++i) {
  for(let j = 0; j < 3; ++j) {
    let input = prompt(`Value at coords (${i}, ${j})`, '');
    if(!input) break outer;
  }
}

i = 0;
while(++i < 3) {
  console.log(`number ${i}!`);
}
let n = 10;
nextPrime: for(let i = 2; i <= n; ++i) {
  for(let j = 2; j < i; ++j) {
    if(i % j === 0) continue nextPrime;
  }
  console.log(i);
}
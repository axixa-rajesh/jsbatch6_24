let val = [3, 4, 5, 1, 4, -6, 3];
let z= Math.min(...val);
let y = Math.max(...val);
console.log(x);
console.log(y);

let a = [12, 1, 4];
a[3] = 44;
a[0] = 22;
a[6] = 99;
console.log(a, a.length);


// ... spread array into another array
let a = [10, 20, 30];
let x = [12, 3, ...a, 15];
console.log(x);

// array destructuring 
/* 
extracting multiple values from data stored in arrays. The destructing assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays
*/
let detail = ['tv', 25000, 'no', 'led'];
let [name, price,, type] = detail;
console.log(name);
console.log(price);
console.log(type);

//1
// let [a, b] = [10, 30];
// console.log(a);
// console.log(b);

/* 
store multiple values
it's allocates contiguous memory for element
any type
*/
// let a = ['Rajesh', 12, 3.4, true];
// console.log(a[3]);
// console.log(a[0]);

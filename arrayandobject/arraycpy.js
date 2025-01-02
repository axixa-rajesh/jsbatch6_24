// deep copy
let a = [3, 2, 4, 5];
let b = a.map(v => v);
// let b = structuredClone(a);
b[4] = 44;
console.log(a);
console.log(b);

// let b = [];
// //1
// for (let i = 0; i < a.length; i++)
//     b[i] = a[i];
//2
// let b = [...a];

//referance type data type
// Shallow Copy
// let x = [4, 3, 5];
// let y = x;
// y[3] = 44;
// console.log(x);
// console.log(y);

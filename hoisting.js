//Cannot access 'x' before initialization (in case let)

console.log(x);
let x = "Rajesh";
//here output of  y is "undefined" instead of error in case of var
console.log(y);
var y = 30;

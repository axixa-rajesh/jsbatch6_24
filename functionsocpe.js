/* 
function variable are local variables
(are autometically delete when function execution is complete. Whenver function called localvariables takes new space in memory) 
outer scope of function are global variables
*/
let x = 10;
var y = 20;
function show() {
    let x = "Rajesh";
    var y = "Axixa";
    console.log(x+ " "+y);
}
console.log(x+ " "+y);
show();
console.log(x+ " "+y);

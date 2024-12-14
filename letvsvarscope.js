//let scope is block level {} and function level both
// var scope is function level
var x = 10;
{
    console.log(x); 
    var x = 20; //var x is redeclare
    console.log(x); 
    
}
console.log(x); 
// let x = 10;
// {
//     let x = 20; //x is new variable of this scope
//     console.log(x); //20
    
// }
// console.log(x); //10


// let x = 10;
// {
//     var y = 20;
//     // let y = 20;
//     console.log(x); //10
//     console.log(y); //20
// }
//     console.log(x); //10
//     console.log(y); //in case of let y is not define // in case var y is 20 here


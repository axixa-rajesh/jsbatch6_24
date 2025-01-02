let person = {
    name: "Rahul",
    gender:"Male"  
};
let salary = 100000;
let employee = {
    ...person,
    salary,
};
let x = "salary";
let y = 90000;
let obj = { ...employee, [x]: y };
// obj[]
console.log(obj);

//  employee[x] = y;
// console.log(employee);






// employee[x] = "Programmer";

// // employee.deg = "Programmer";
// console.log(employee);
// console.log(person);


// console.log(person.name);
// console.log(person.gender);
// console.log(person['name']);
// console.log(person['gender']);

let employee = [
    { id: 1, name: "Suyash", marks: 500 },
    { id: 2, name: "Karan", marks: 520 },
    { id: 3, name: "Pratik", marks: 490 },
    { id: 4, name: "Jeeshan", marks: 490 },
    { id: 5, name: "Rahul", marks: 590 },
    { id: 6, name: "Sourabh", marks: 400 },
];
function get(id) {
    const x = employee.find((e) => e.id == id);
    console.log(x);
    
}
get(3);
get(1);
get(6);
get(4);
get(2);
get(5);

// let s = {
//     name: "rajesh",
//     marks: 120,
//     show: function() {
//         console.log(this.name);
//         console.log(this.marks);
//     }
// };
// s.show();
// console.log(typeof s);

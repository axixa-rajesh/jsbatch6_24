let product = {
    "name": "t-shirt",
    "price": 2000,
    "discount":70
};
for (let pro in product) {
    console.log(`${pro} : ${product[pro]}`);
    //             name :   product['name']
    
}
// let product = [
//     {name:"phone",price:40000,id:1},
//     {name:"laptop",price:42000,id:2},
//     {name:"TV",price:42000,id:3},
// ]
// let sum = 0;
// for (let index in product) {
//     // sum = sum + product[index].price;
    
//     for (let pro in product[index]) {
//         console.log(pro);
        
//     }
// }
// console.log(sum);

    // console.log(product[index].name);
    // console.log(product[index]['price']);
    //           p[0].name

// let x = [10, 20, 30, 11, 3, 2, 355, 3, 46, 3];
// let sum = 0;
// //loop /cycle/ itration
// for (let index in x) {
//     sum = sum + x[index];
//     // console.log(x[index]); 
// }
// console.log(sum);


// const age = 42;

// if(age >= 18) {
//     console.log('you can vote');
    
// }
// else {
//     console.log('you can not vote');
    
// }
// ternary ----- three parts 
// ? : 
//condition ? do something when true : do something when false

// age >= 18 ? console.log("you can vote")
//  : console.log( "you can not vote");
 
// age >= 30 ? console.log('you are middle age person') : console.log('you are young person');
// ;


// let price = 5000;
// const isLeader = false;
// if(isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);

// // advance ternary 
// let price = 500;
// const isLeader = true;
// if(isLeader === true){
//     if(price > 1000){
//         price = price/2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 100;
// }

// console.log(price);

// price = isLeader === true ? price > 1000 ? price /2 : 0 : price +100;
// console.log(price);
//==================================
// let price = 500;
// let isLeader = false;
// if(isLeader === true){
    // price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price);
//  isLeader === true ? 0 : price = price + 400;
//  console.log(price);
//====================================
//optional: semiAdvance ternary
let price = 5000;
let isLeader = false;
if (isLeader = true){
    if(price > 1000){
        price = price / 2;
    }
    else {
        price = 0
    }
}
else {
    price = price + 100;
}
// console.log(price);
price = isLeader === true ? 0 : price = price + 100;
price > 1000 ? price = price /2 : 0;
// console.log(price);
// price = isLeader === true ? price > 1000 ? price = price /2 : 0 : price = price + 100;
// console.log(price);
price = isLeader === true ? price > 1000 ? price = price /2 : 0 : price = price + 100 ;
console.log(price);




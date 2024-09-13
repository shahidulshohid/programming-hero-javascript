// const price = 5000;

// if(price >= 5000){
//     //will get discount 10%
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
// }
// else {
//     console.log('you have to pay full money of price');
    
// }

// if(price >= 8000){
//     //will get 20%
//     const discount = price * 20 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// }
// else if(price > 2500) {
//     //will discount 5%
//     const discount = price * 5 /100;
//     const payAmount = price - discount;
//     console.log(payAmount);
    
// }
// else {
//     console.log('you will not get any discount here');
    
// }


//===================================
// practice here 
var price = 9000
if(price >= 5000){
    const discount = price * 20 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (price >= 25000){
    const discount = price * 50 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log('you will not get any discount here')
}
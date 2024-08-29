const age = 10;
const price = 5000;

if (age <= 12) {
    console.log('you can eat for free do not pay any price')
}
else if (age >= 70) {
    //will get 50%;
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 40){
    //will get 25% ;
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}
else {
    console.log('no person can eat anything');
    
}
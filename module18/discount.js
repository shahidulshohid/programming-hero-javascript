const price = 5000;

if(price >= 5000){
    //will get discount 10%
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else {
    console.log('you have to pay full money of price');
    
}
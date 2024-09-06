function add(price1, price2){
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);


function add2(price1, price2){
    return price1 + price2;
}
const bill2 = (add2(10, 70))
console.log(bill, bill2);

function addMilt(number){
    const add = number + 10;
    const subtract = add - number;
    const milt = subtract * add;
    return milt;
}
const result = addMilt(40);
console.log(result)

function testing(number){
    if(number % 2 === 0){
        return number + 10;
    }
    else {
       return number - 5; 
    }
}
const result2 = testing(11)
console.log(result2)

function testing2(number){
    if(number % 2 === 1){
        return number + 3;
    }
    else {
        return number - 3;
    }
}
const result3 = testing2(51)
console.log(result3);

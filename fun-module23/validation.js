
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a valid number'
    }
    const mult = num1 * num2;
    return mult;
} 
const result = multiply(5, 'seven')
console.log(result)
//====================================
function fullName(first, second){
    if(typeof first !== 'string' || typeof second !== 'string'){
        return 'please provide a valid string'
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullName(4, 5)
console.log(full)
//======================================
function getPrice(product){
    const price = product.price;
    return price;
}
const price = getPrice({name:'chulcani dandi', price:35, color:'blue'})
console.log(price)
 //==========================
 function getSecond(numbers){
    if(!Array.isArray(numbers)){
        return 'please provide a valid array'
    }
    const second = numbers[1];
    return second;
 }

 const second = getSecond([4, 5, 3, 6, 9])
 console.log(second)
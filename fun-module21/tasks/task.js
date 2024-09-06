// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 
function fourParamMultiply(num1, num2, num3, num4){
    const result = num1 * num2 * num3 * num4;
    return result;
    
}
const totalResult = fourParamMultiply(10, 20, 30, 40);
console.log('four multiply number is', totalResult);

//===========================
// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddNumber(number){
    if(number % 2 === 1){
        const result = number * 2;
        return result;
    }
    else{
        const result = number / 2;
        return result;
    }
}
const oddOrEvenNumber1 = oddNumber(50);
const oddOrEvenNumber2 = oddNumber(55);
console.log('even number or odd number here', oddOrEvenNumber1);
console.log('even number or odd number here', oddOrEvenNumber2);

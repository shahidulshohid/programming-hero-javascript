function evenNumbersOnly(numbers){
    // console.log(numbers);
    const evens = [];
    for(const num of numbers){
        // console.log(num);
        if(num % 2 === 0){
            // console.log(num)
            evens.push(num)
        }
    }
    return evens;
}
const numbers = [5,8,91,24,26];
// const evenNumbers = evenNumbersOnly(numbers)
// console.log('even numbers are', evenNumbers);
// //=======================
function sumOfEvenNumbers(numbers){
    // console.log(numbers)
    let sum = 0;
    for(const num of numbers){
        // console.log(num);
        if(num % 2 === 0){
            sum += num;
        }
    }
    return sum; 
}
const sumEvenNumbers = sumOfEvenNumbers(numbers)
 console.log(sumEvenNumbers);

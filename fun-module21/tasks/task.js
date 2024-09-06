// ### Task-1  
// Take four parameters. Multiply the four numbers and then return the result 
// function fourParamMultiply(num1, num2, num3, num4){
//     const result = num1 * num2 * num3 * num4;
//     return result;
    
// }
// const totalResult = fourParamMultiply(10, 20, 30, 40);
// console.log('four multiply number is', totalResult);

//===========================
// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// function oddNumber(number){
//     if(number % 2 === 1){
//         const result = number * 2;
//         return result;
//     }
//     else{
//         const result = number / 2;
//         return result;
//     }
// }
// const oddOrEvenNumber1 = oddNumber(50);
// const oddOrEvenNumber2 = oddNumber(55);
// console.log('even number or odd number here', oddOrEvenNumber1);
// console.log('even number or odd number here', oddOrEvenNumber2);
//===================================
// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++ ){
//         // console.log(array[i]);
//         sum = sum + array[i];
//     }
//     // console.log(sum);
//     const average = sum / 9;
//     return average;
    
// }
// const array = [50,2,3,4,5,6,7,8,9];
// const averageValues = make_avg(array);
// console.log(parseFloat(averageValues.toFixed(2)))
//======================================
// function make_avg(array){
//     const size = array.length;
//     // console.log(array)
//     let sum = 0;
//     for(const num of array){
//         // console.log(num);
//         sum = sum + num
        
//     }
//     return sum / size;
// }
// const array = [10, 20, 30, 40, 50];
// const averageNumber = make_avg(array)
// console.log(averageNumber)
//=============================
// function make_avg(numbers) {
//     const size = numbers.length;

//     const sum = numbers.reduce((accumulator, current) => accumulator + current);
//     const average = sum / size;

//     return average;
// }

// // Example usage
// const numbersArray = [10, 20, 30, 40, 50];
// const average = make_avg(numbersArray);
// console.log(average); // Output will be 30
//============================
// function make_avg(numbers){
//     const size = numbers.length;
//     const sum = numbers.reduce((previous, current)=>previous + current)
//     return sum / size
// }
// const numbersArray = [10, 20, 30, 40, 50];
// const average = make_avg(numbersArray)
// console.log(average);
//======================================
// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(str){
}
const binaryStr = '000001111100000';
const countBinaryStr = count_zero(binaryStr);
console.log(countBinaryStr)

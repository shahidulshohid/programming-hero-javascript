// function sumOfNumbers(numbers){
//     console.log(numbers);
//     let sum = 0;
//     for(const num of numbers){
//         sum = sum + num;
//     }
//     return sum;
    
// }

// const nums = [1,2,3,4,5,6,7,8];
// const sum = sumOfNumbers(nums)
// console.log(sum)
//=====================
function sumNumberOfArray(numbers){
    // console.log(numbers)
    let sum = 0;
    for(const num of numbers){
        // console.log(num)
        sum = sum + num;
    }
    return sum;
}
const array = [1,2,3,4,5,6,7,8,9];
const sum = sumNumberOfArray(array);
console.log('sum number is', sum)
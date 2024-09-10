// ### ========================================================================= Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input:
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2
const numbers = [5, 6, 11, 12, 98, 5]
function repeatedNumber(numbers){
    let count = numbers[0];
    for(let i = 0; i < numbers.length; i++){//===========================problem solve korte hobe aita
        // console.log(numbers[i])   
        if(numbers[i] === count)
            count ++;
    }
    return count;
}
const result = repeatedNumber(numbers);
console.log(result)
// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
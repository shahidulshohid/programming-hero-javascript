/**
 * function takes an array as parameter.
 * give me the average of the odd numbers in the array.
 * 
 */
/**
 * put odd numbers in an array
 */

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number)
        }
    }
    // odds is the array, that contains only the odd numbers.
    // console.log(odds)
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
    
}
// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('average of the odd numbers is ', avg)

// ===============================================
//even number;
function evenAverage(numbers){
    // console.log(numbers)
    const evens = [];
    for(const number of numbers){
        // console.log(number)
        if(number % 2 === 0){
            // console.log(number)
            evens.push(number);
        }
    }
    // console.log(evens);
    let sum = 0;
    for(const even of evens){
        sum += even;
    }
    const count2 = evens.length;
    console.log(sum, count2);
    const avg2 = sum /count2;
    return avg2;
    
    
    
}
const numbers2 = [22, 33, 65, 76, 88, 55, 77];
const avg2 = evenAverage(numbers2);
console.log(avg2);


function noDuplicate(array){
    // console.log(array)
    const unique = [];
    for(const item of array){
        // console.log(item)
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
    
}
const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'cabul', 'cabul'];
const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray);
//=============================
// Duplicate number 
function noDuplicateNumber(numbers){
    // console.log(numbers)
    const uniqueArray = []; 
    for(const num of numbers){
        // console.log(num);
        if(uniqueArray.includes(num) !== true){
            uniqueArray.push(num)
        }
    }
    return uniqueArray;
}
const numbers = [23, 45, 56, 55, 23, 56, 76, 55, 80, 90]
const uniqueNumber = noDuplicateNumber(numbers);
console.log(uniqueNumber)
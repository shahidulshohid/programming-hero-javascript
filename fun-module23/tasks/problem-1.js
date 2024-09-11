// ###======================================================================== Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

function findLowestNumber(arr){
    let lowest = arr[0];
    for(const num of arr){
        if(num < lowest){
            lowest = num;
        }
    }
    return lowest;
}
const lowestNumber = [167, 190, 120, 165, 137];
console.log(findLowestNumber(lowestNumber))
const heights = [65, 66, 68, 72, 78, 60];
function getMax(numbers){
    let max = heights[0]
    for(const num of numbers){
        if(num > max ){
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('max value is ', max);
//==============================
// min number
const numbers = [65, 66, 68, 72, 78, 60];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min)
            min = num;
    }
    return min;
} 
const min = getMin(numbers)
console.log('min value is ', min)

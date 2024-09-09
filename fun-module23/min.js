const numbers = [20000, 16000, 50000, 100000, 12000, 30000, 35000];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const cheap = getMin(numbers)
console.log('cheapest one is', cheap) ;
//=====================================
function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const max = getMax(numbers);
console.log(max);


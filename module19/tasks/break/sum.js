/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// while loop
// let sum = 0;
// let number = 1;
// while(true){
//     console.log(number)
//     sum = sum + number;
//     if(sum >= 100){
//         break;
//     }
//     number ++
// }
// console.log(`sum is ${sum} and stop at number ${number}`)
// again
let sum = 0;
let number = 1;
while(true){
    sum = sum + number;
    console.log(sum)
    if(sum >= 100){
        break;
    }
    number++
}
console.log(`sum is ${sum} and stop number ${number}`)
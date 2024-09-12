// const arr = [2, 4, 12, 14, 23, 45,32,7];
// let biggestNumbers = arr[0];
// for(let i = 1; i < arr.length; i++){
//     // console.log(arr[i])
//     if(arr[i] > biggestNumbers){
//         biggestNumbers = arr[i]
//     }
// }
// console.log(biggestNumbers)

// another way ======================================
// console.log(Math.max(...arr))
// ==========================
// biggest numbers with function 
// const numbers = true;
// const arr = [2, 4, 12, 14, 23, 45,32,7];
// function giveBiggestNumbers(arr){
//     if(!Array.isArray(arr)){
//         return 'this is not an arr------------'
//     }
//     let biggest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > biggest){
//             biggest = arr[i]
//         }
//     }
//     return biggest;
// }
// const result = giveBiggestNumbers(arr);
// console.log(result)
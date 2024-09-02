/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
// answer 
// for loop 
// ==================
// for(let i = 1; i <= 100; i++){
//     console.log(i)
//     if(Math.sqrt(i) === Math.floor(Math.sqrt(i))){
//         break;
//     }
// }
for(let i = 1; i <= 100; i++){
    if(Math.sqrt(i) === Math.floor(Math.sqrt(i))){
        console.log(`${i} is a perfect square`);
        
        break;
    }
    
}
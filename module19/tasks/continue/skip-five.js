/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
// for loop 
// display odd Number 
//=============
// for(let i = 55; i <= 85; i++){
//     if(i % 2 === 1){
//     console.log(i)
//     }
// }

// skip the number divisible by 5 
//=====================
for(let i = 55; i <= 85; i++){
    if(i % 5 === 0){
        continue;
    }
    console.log(i);
    
}
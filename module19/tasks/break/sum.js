/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
// for loop 
for(let i = 1; i <= 100; i++){
    console.log(`these are regular numbers ${i}`);
    
    if(i === 100){
        console.log(`these are break numbers ${i}`);
        break;
    }
}
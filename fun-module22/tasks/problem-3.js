// ### ================================================================= Task-3:
// Write a function to count the number of vowels in a string.
let vowels = ['a', 'e' ,'i' , 'o' ,'u', 'A', 'E', 'I', 'O', 'U'];
const str = 'shahidul islam ADVOCET';
const  makeArray = str.split('')
// console.log(makeArray)
function countVowels(str){
    let count = 0;
    for(const char of str){
        // console.log()
        if(vowels.includes(char)){
            count ++;
        }
    }
    return count;
}
const result = countVowels(makeArray);
console.log(result)
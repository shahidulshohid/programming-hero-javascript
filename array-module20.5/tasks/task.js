// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`
// for loop 
// ===================
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const rev_colors = [];
// for(let i = colors.length -1; i >= 0; i--){
//     const color = colors[i];
//     rev_colors.push(color);
// }
// console.log(rev_colors);

// while loop 
//=======================
// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const rev_colors = [];
// let i = 0;
// while(i < colors.length){
//     const color = colors[i]
//     rev_colors.unshift(color)
//     i++
// }
// console.log(rev_colors);

//==============================
// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
// `const numbers = [12, 98, 5, 41, 23, 78, 46];`

// **Output:**

// `[12, 98, 78, 46]`
//==========================
// for loop
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const newNumbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         const num = numbers[i];
//         newNumbers.push(num)
//     }
// }
// console.log(newNumbers);
//=========================
// while loop
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const newNumbers = [];
// let i = 0;
// while(i < numbers.length){
//     if(numbers[i] % 2 === 0){
//         const num = numbers[i];
//         newNumbers.push(num)
//     }
//     i ++
// }
// console.log(newNumbers);
//=======================
// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// **Input:**
// `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

// **Output:**

// `'TomTimTinTik'`
//============================
// for of loop
// const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = '';
// for(const num of numbers){
//     result = result + num;
// }
// console.log(result);
//==================
//for loop
// const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let result = "";
// for(let i = 0; i < numbers.length; i++){
//     result += numbers[i];
// }
// console.log(result);

//=========================
// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`
//===================
// const statement = 'I am a hard working person'
// const reverseStatement = statement.split(' ').reverse().join(' ')
// console.log(reverseStatement);

//============================
const statement = 'I am a hard working person'
const newStatement = statement.split(' ');
let makingStr = []
// console.log(newStatement.reverse());
for(let word of newStatement){
    makingStr.unshift(word);
}
console.log(makingStr.join(' '));








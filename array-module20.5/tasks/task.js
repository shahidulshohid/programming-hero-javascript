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
const numbers = [12, 98, 5, 41, 23, 78, 46];
const newNumbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        const num = numbers[i];
        newNumbers.push(num)
    }
}
console.log(newNumbers);




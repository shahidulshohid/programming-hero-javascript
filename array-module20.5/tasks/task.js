// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`
// for loop 
// ===================
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const rev_colors = [];
for(let i = colors.length -1; i >= 0; i--){
    const color = colors[i];
    rev_colors.push(color);
}
console.log(rev_colors);

// while loop 
//=======================
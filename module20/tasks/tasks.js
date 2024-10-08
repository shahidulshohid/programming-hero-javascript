// ### Task-1
// Access the `golden rod` color value in output.
// ```
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"])

//==========================
// ### Task-2
// For this object below add a property named `passenger capacity` with value 5
// ```js
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car['passenger capacity'] = 5
// console.log(car)

//===============================
// ### Task-3
// Display the physics marks as output.
// ```js
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

//================================
// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const propertiesNumber = Object.keys(student).length;
// console.log(propertiesNumber);

// //====================================
// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };
// for(const key in myObject){
//     console.log(`key: ${key} | type: ${ typeof myObject[key]}`)
// }
//==============================
// ### Task-1: 
// Count how many times a string has the letter `a`
// let myString = "Apple And banana";

// let sum = 0;
// for(let i = 0; i <= myString.length-1; i++){
//     if(myString[i].toLowerCase() === "a"){
//         sum++
//     }
    
// }
// console.log(`there are ${sum} letters a here`);
//============================
// ### Task-2: 
// Count how many times a string has the letter `a` or `A`
// let myString = "Apple And banana";
// let sum = 0;
// for(let i = 0; i < myString.length; i++){
//     if(myString[i] === 'a' || myString[i] === 'A'){
//         sum++
//     }
// } 
// console.log(sum);
//====================
// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
    // let vowels = ['a', 'e', 'i', 'o', 'u']
    // let country = 'bangladesh is my homeland'
    // let sum = 0;
    // for(let i = 0; i < country.length; i++){
    //     if(vowels.includes(country[i])){
    //         sum++
    //     }
    // }
    // console.log(sum);
//===================================
// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
// const mixString = 'explain and eXplore'
// let result = '';
// for(let i = 0; i < mixString.length; i++){
//     if(mixString[i] === 'x'){
//         result += 'y'
//     }
//     else if(mixString[i] === 'X'){
//         result += 'Y'
//     }
//     else{
//         result += mixString[i]
//     }
// }
// console.log(result);
//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
//==================================

// ---
// ### Task-5:
// Capitalize Every first Letter of each word in a String
// let firstString = 'bangladesh is my home land';
// let words = firstString.split(' ')
// for(let i = 0; i < words.length; i++){
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1)
// }
// console.log(words);
let firstString = 'bangladesh is my home land';
let words = firstString.split(' ')
let result = ''
for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
}
result = words.join(' ');
console.log(result);




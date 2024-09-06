// const numbers = [23, 45,23, 65, 7, 88];
// numbers.push(100);
// numbers.pop()
// numbers.unshift(50)
// numbers.shift()
// console.log(numbers)
// const newNumber = numbers.slice(2, 5)
// console.log(newNumber);
//===================================
// const fruits = ['amm','jam','katal','lichi']
// const ful = ['shapla','rogonigondha','lili','joba','poddo']
// const numbers = [23,44,3,65,77,90]
// console.log(fruits);
// console.log(ful);
// console.log(numbers)
// const akakar = fruits.concat(ful, numbers)
// console.log(akakar);
// const newFruits = fruits.indexOf('amm')
// const find = fruits.includes('kamranga')
// console.log(find);
// const checkArray = Array.isArray(ful)
// console.log(checkArray);
//===============================
// const flowers = ['galap', 'joba', 'lili', 'shalpa'];
// const addFlowers = flowers.join(' ')
// console.log(typeof addFlowers)
//================================
// const string = "galap,joba,lili,shalpa";
// const convert = string.split(",")
// console.log(convert)
// // console.log(typeof convert);
// console.log(Array.isArray(convert))
//=========================================
// const flowers = ['galap', 'joba', 'lili', 'shalpa'];
// for(let i = flowers.length -1; i >= 0; i--){
//     console.log(flowers[i])
// }
//==============================
// for(let i = 1; i <= 5; i++){
//     console.log('i am for loop', i);
//     for(let j = 1; j <= 5; j++){
//         console.log('i am nested loop', j);
//     }
    
// }
//==============================
// problem solve
// const numbers = [1,2,3,4,5,]
// let sum = 0;
// for(let i = 0; i <= numbers.length; i++){
//     sum += i;
// }
// console.log(sum);
//===============
// for(const item of numbers){
//     sum += item
// }
// console.log(sum);
//======================
const numbers = [5,2,3,4,5,6,7,8,9]
let events = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         events.push(numbers[i]);
        
//     }
// }
// console.log(events);
//=================
// for(const item of numbers){
//     if(item % 2 === 0){
//         events.push(item)
//     }
// }
// console.log(events);
//=========================
// object practice
// const person = {
//     name: 'shahdiul', 
//     address: 'khadash',
//     profession: 'developer'
// }
// person.name = 'islam',
// person.age = 32,
// delete person.address,
// const keys = Object.keys(person)
// const values = Object.values(person)
// console.log(keys)
// console.log(values)
//=====================
// break practice 
// const x = [1,2,3,4,5,6,7,8];
// for(let i = 0; i < x.length; i++){
//     console.log(x[i]);
//     if(x[i] === 5){
//         break;
        
//     }
//     console.log(x[i]);
    
// }
// continue practice 
// const x = [1,2,3,4,5,6,7,8];
// for(let i = 0; i < x.length; i++){
//     if(x[i] === 5){
//         continue;
        
//     }
//     console.log(x[i]);
    
// }
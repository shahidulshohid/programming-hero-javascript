// const person = ['rakib','nokib', 'sakib', 'akib', 'dakib'];
// const sortedPerson = person.sort();
// console.log(sortedPerson)
//=========================
// const numbers = [3,2,5,6,4,1,7,9,8];
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);
//===================================
// const numbers = [3,2,5,6,43,4,1,7,38,9,8];
// const sortedNumbers = numbers.sort(function(a, b){
//     return a - b;
// });
// console.log(sortedNumbers);
//================================
const numbers = [3,2,5,6,43,4,1,7,38,9,8];
const sortedNumbers = numbers.sort(function(a, b){
    return b - a;
});
console.log(sortedNumbers);

//write a program ot check the numbers and return. if one of the number is 100 and if the sum two numbers is 100.
function isEqualTo100(a, b){
    return a === 100 || b === 100 || (a + b) === 100;
}
console.log(isEqualTo100(10, 20))
console.log(isEqualTo100(10, 100))


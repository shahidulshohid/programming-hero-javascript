// # js-problems-part1-practice-tasks

// ### ========================================================================= Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahr(cel){
    // const fir = cel * 32;
     const fir = (cel * 9/5) + 32
    return fir;
}
const convertFarh = celsiusToFahr(25);
console.log(convertFarh)

// again solve this problem
// ===================

function celsiusToFahrenheit(Celsius){
    return Celsius * 9/5 + 32;
}
const temInFahrenheit = celsiusToFahrenheit(35)
console.log(temInFahrenheit);

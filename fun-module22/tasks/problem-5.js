// ### ============================================================ Task-5:
// Generate a random number between 10 to 20.
function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(20, 10);
console.log(randomNumber)
//we can do it like this way
function createRandomNumber(){
    const result = Math.floor(Math.random() * 10) + 10;
    return result;
}
let randomNumber2 = createRandomNumber()
console.log(randomNumber2)
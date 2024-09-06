//year will be a leap year, if the year is divisible by 4
// function learYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// const isLeapYear = learYear(2052);
// console.log(isLeapYear)
//=======================
//those year that is not divisible by 100 and if the year is divisible by 4. then it will be a leap year.
//if the year is divisible by 400, then it is a leap year;
//then it is not a leap year
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const learYear2 = isLeapYear2(2021)
const learYear3 = isLeapYear2(2024)
const learYear4 = isLeapYear2(2019)
const learYear5 = isLeapYear2(2052)
console.log(learYear2, learYear3, learYear4, learYear5);

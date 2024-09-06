function inchToFeet(inch){
    const feet = inch / 12;
    const result1 = feet;
    return result1;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight)

//=======================
function inchToFeet2(inch){
    const feetFraction = inch / 12 ;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12 ;
    const result2 = `${feetNumber} feet and ${inchRemaining} inches`

    return result2
}
const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2)
//===========================
function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const convertToKilometer = mileToKilometer(60);
console.log(convertToKilometer)
//===========================
function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const convertToMile = kilometerToMile(70);
console.log(convertToMile);

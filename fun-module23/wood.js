function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairTotalWood= chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const result = chairTotalWood + tableTotalWood + bedTotalWood;
    return result;
}
const wood = woodQuantity(1, 1, 4);
console.log('wood needed', wood);

//another example
function dressQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;
    const totalShirtPrice = shirtQuantity * perShirtPrice;
    const totalPantPrice = pantQuantity  * perPantPrice;
    const totalShoePrice = shoeQuantity * perShoePrice;
    const result = totalShirtPrice + totalPantPrice + totalShoePrice;
    return result;
}
const totalDressPrice = dressQuantity(1, 1, 3)
console.log(totalDressPrice)
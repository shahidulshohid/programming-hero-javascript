// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk
function calculateElectronicsBudget(obj){
    const values = Object.values(obj);
    let addValue = 0;
    for(const value of values){
        addValue = addValue + value;
    }
    return addValue;
}
const result = calculateElectronicsBudget({laptop:35000, tablet:15000, mobile:20000});
console.log(result)

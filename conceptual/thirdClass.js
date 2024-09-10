// const arr = [2, 4, 12, 14, 23, 45,32,7];
// let biggestNumbers = arr[0];
// for(let i = 1; i < arr.length; i++){
//     // console.log(arr[i])
//     if(arr[i] > biggestNumbers){
//         biggestNumbers = arr[i]
//     }
// }
// console.log(biggestNumbers)
// =================================================================
// another way 
// console.log(Math.max(...arr))
//==========================
// // biggest numbers with function 
// const numbers = true;
// const arr = [2, 4, 12, 14, 23, 45,32,7];
// function giveBiggestNumbers(arr){
//     if(!Array.isArray(arr)){
//         return 'this is not an arr------------'
//     }
//     let biggest = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > biggest){
//             biggest = arr[i]
//         }
//     }
//     return biggest;
// }
// const result = giveBiggestNumbers(arr);
// console.log(result)
//===========================================================
// function with object 
// function showInfo(info){
//     if(typeof info !== 'object'){
//         return 'provid a vaild object'
//     }
//     const details = `amar name: ${info.name} and amar bari: ${info.address}`;
//     return details
// }
// const person = {
//     name:'shahidul',
//     address:'rajbari'
// }
// const x = showInfo('shahiduls');
// console.log(x)
//=======================================================
// make this shahidul@rajbari.ocm 
// const person = {
//     name:'shahidul',
//     address:'rajbari'
// }
// function createEmail(info){
//     if(typeof info !== 'object'){
//         return 'Invalid object'
//     }
//     const result = info.name + '@' + info.address + '.com';
//     return result;
// }
// console.log(createEmail(person));
//===============================================
//savings count
// function calculateSavings(income){
//     if(typeof income !== 'number'){
//         return 'Invalid input'
//     }
//     const houseRent = 5000;
//     const mealCost = 3000;
//     const personalExpense = 2000;
//     const totalExpenses = houseRent + mealCost + personalExpense;
//     if(totalExpenses > income){
//         return 'Earn more ---!'
//     }
//     const savings = income - totalExpenses;
//     return savings
// }
// const result = calculateSavings(20000);
// console.log(result);
//=================================================
//akta arary er moddhe koita boolenan ase tar count kore dekhan;

// const x = [3, 2, true, 'hello', false, 34, false, {name:'mehedy'}]
// function countBoolean(array){
//     if(!Array.isArray(array)){
//         return 'Please provid valid array'
//     }
//     let count = 0;
//     for(const item of array){
//         if(typeof item === 'boolean'){
//             count ++
//         }
//     }
//     return count;
// }
// const result = countBoolean(x);
// console.log(result)
/**
 * bus = 50;
 * micro = 15;
 * rickshaw const 20 taka;
 * 
 * borjatri = 234;
 * bus(4) = 200, remaining = 34;
 * micro(2) = 30, remaining = 4;
 * rickshaw (4) = 20 * 4 = 80 taka;
 */
// function rickshawVara(peoples){
//     const bus = 50;
//     const micro = 15;
//     const rickshawCost = 20;
//     const afterRemainingBUs = 234 % bus;
//     const remainingAfterMicro = afterRemainingBUs % micro;
//     return remainingAfterMicro * rickshawCost;
// }
// console.log(rickshawVara(234));
//============================================================

//=======================================
const person1 = {
    name:'Abul kashem',
    honors:40,
    hsc:30,
    isFFfamily:true
}
const person2 = {
    name:'babul mia',
    honors:45,
    hsc:32,
    isFFfamily:false
}
function jobSelection(info){
    if(typeof info !== 'object'){
        return 'please provide a valid object'
    }

    const total_marks = info.honors + info.hsc;

    if(info.isFFfamily){
        return total_marks + (total_marks * 20 / 100)
    }
    if(info.isFFfamily && total_marks <= 80){
        return 'aho vatija aho .......charki to tomar..........!';
    }
    else if(info.isFFfamily && total_marks < 80){
        return 'bad luck vatija...next time......!'
    }
    else if(!info.isFFfamily && total_marks > 80){
        return 'you have got the job..............!'
    }
    else if(!info.isFFfamily && total_marks < 80){
        return 'Rajakar rajakar .........!'
    }

//    if(total_marks >= 80){
//     return 'you have got the job'
//    }
//    else{
//     return 'you failed'
//    }
}
console.log(jobSelection(person2))



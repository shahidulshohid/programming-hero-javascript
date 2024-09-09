function deleteInvalids(array){
    if(Array.isArray(array) === false){
        return "invalid Array"
    }
    let numberArray = [];
    for(const element of array){
        // console.log(element);
        if(typeof element === "number" && isNaN(element) === false){
            numberArray.push(element)
        }
    }
    return numberArray;
}
console.log(deleteInvalids([NaN, 120, 1, -1, undefined]));
console.log(deleteInvalids(["1", {num:2}, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({num:[1, 2, 3]}));

function evenSizedString(str){
    const size = str.length;
    console.log(str, size)
    if(size % 2 === 0){
        console.log('even size')
        return true;
    }
    else {
        console.log('odd size');
        return false;
        
    }
}
// evenSizedString('dhaka');
// evenSizedString('faka');
// console.log(evenSizedString('dhaka'));
// console.log(evenSizedString('faka'));
//==============================
function doDoubleOrTriple(number, doDouble){
    // console.log(number, doDouble)
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
// console.log(doDoubleOrTriple(5, true));
// console.log(doDoubleOrTriple(5, false));
//=================================
function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
console.log([33,45,66,33,44,98])




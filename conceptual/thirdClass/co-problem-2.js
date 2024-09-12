// function with object 
function showInfo(info){
    if(typeof info !== 'object'){
        return 'provid a vaild object'
    }
    const details = `amar name: ${info.name} and amar bari: ${info.address}`;
    return details
}
const person = {
    name:'shahidul',
    address:'rajbari'
}
const x = showInfo('shahiduls');
console.log(x)
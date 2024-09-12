// make this shahidul@rajbari.ocm 
const person = {
    name:'shahidul',
    address:'rajbari'
}
function createEmail(info){
    if(typeof info !== 'object'){
        return 'Invalid object'
    }
    const result = info.name + '@' + info.address + '.com';
    return result;
}
console.log(createEmail(person));
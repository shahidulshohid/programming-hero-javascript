//akta arary er moddhe koita boolenan ase tar count kore dekhano hoise;

const x = [3, 2, true, 'hello', false, 34, false, {name:'mehedy'}]
function countBoolean(array){
    if(!Array.isArray(array)){
        return 'Please provid valid array'
    }
    let count = 0;
    for(const item of array){
        if(typeof item === 'boolean'){
            count ++
        }
    }
    return count;
}
const result = countBoolean(x);
console.log(result)
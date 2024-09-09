const phones = [
    {name: 'Samsung', price: 20000, camera:'12mp', color:'black'},
    {name: 'xoami', price: 18000, camera:'12mp', color:'black'},
    {name: 'Oppo', price: 30000, camera:'12mp', color:'black'},
    {name: 'Iphone', price: 10000000, camera:'12mp', color:'black'},
    {name: 'Walton', price: 310000, camera:'12mp', color:'black'},
    {name: 'HTC', price: 27000, camera:'12mp', color:'black'},
]
function cheapestObject(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
// const cheap = cheapestObject(phones)
// console.log(cheap)
//=======================
// figure out max object
function getMax(phones){
    let max = phones[0] 
    for(const phone of phones){
        if(phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}
console.log(getMax(phones));



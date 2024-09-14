const firends = {
    name:'sakib khan',
    id:123,
    address:'movie cinema',
    firends: ['abul', 'baaz', 'salman', 'amir'],
    movies:[{
        name: 'n.1',year: '2009'}, {name:'king khan', year: 2003}],
    act: function(arr){
        let sum = 0;
        for(const item of arr){
            sum += item;
        }
        return sum;
    },
    car: {
        brand: 'tesla',
        price:9000000000,
        made:2005,
        manufacturer: {
            name:'tesla',
            ceo:'elon mask',
            country:'USA'
        },
    }
}
console.log(firends.movies[1])

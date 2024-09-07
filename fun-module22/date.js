const today = new Date()
console.log(today) //it gives us current of today.
//===========================
const date = new Date("2062-08-012");
console.log(date) // now from it,,, we can figure out a lots of information.like ....
console.log(date.getMonth()) // it gives us month. but it count it by -1. because it count is hold index number. month start by index 0. that why if stay month 10 it gives us 9 by index number;
console.log(date.getDate())//it gives us just day.
const specificDate = new Date(2091, 0, 26)
console.log(specificDate) //here will output 1 instead of 0. because we will provide here 0 index. it works like this.
specificDate.setMonth(10)
console.log(specificDate)
console.log(specificDate.toDateString())
console.log(specificDate.toLocaleDateString())
console.log(specificDate.toLocaleDateString('en-GB'))

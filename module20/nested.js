const collage = {
    name:'vnc',
    class:['11', '12'],
    events:['science fair', 'bijoy dibosh', '21 fab'],
    unique: {
        color:'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(collage.unique.color)
// console.log(collage.unique.result.gpa)
// console.log(collage.unique.result.merit);
// collage.unique.result.merit = 'top top top top'
// console.log(collage.unique.result.merit)
// console.log(collage.events[1]);
// collage.events[1] = '16 dec'
// console.log(collage.events[1]);
console.log(collage)
delete collage.class;
console.log(collage)




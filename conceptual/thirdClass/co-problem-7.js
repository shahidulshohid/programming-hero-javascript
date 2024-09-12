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
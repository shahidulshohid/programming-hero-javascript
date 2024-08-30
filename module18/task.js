
// 1 number task 
//=========================
// let burger = 400;

// if(burger > 500){
//     console.log("Free coke")
// }
// else {
//     console.log("coke: 30tk")
// }

// // 2 number task
//===========================
// const weight = 70;
// const height = 1.65;
// const bmi = weight /(height  * height)
// console.log(bmi);

// if(bmi < 18.5){
//     console.log('you are underweight')
// }
// else if (bmi >= 18.5 && bmi <= 24.9){
//     console.log('you are normal')
// }
// else if (bmi >= 25 && bmi <= 29.9){
//     console.log('you are overweight');
// }
// else{
//     console.log('you are obese');
    
// }

// 3 number task
//===========================
// let score = 95;

// if (score >= 90){
//     console.log('you have got A grade')
// }
// else if (score >= 80){
//     console.log('you have got B grade');
// }
// else if (score >= 70){
//     console.log('you have got c grade');
// }
// else if(score >= 60){
//     console.log('you have got d grade');
// }
// else{
//     console.log('you have got f grade');
    
// }

// // 4 number task 
//========================================
// let score = 85;
// let friendScore = 0;
// if(score > 80){
//     if(friendScore > 80){
//         console.log('I will go to have lunch with my friend');
//     }
//     else if(friendScore >= 60){
//         console.log('Good luck next time will have lunch')
//     }
//     else if(friendScore >= 40){
//         console.log('I blocked your message and unseen')
//     }
//     else{
//         console.log('I blocked my friend from today');
//     }
// }
// else{
//     console.log("I will go home because, im so sad today");
    
// }

// 5 number task
//============================

// 6 number task
//==========================
const age = 65;
const ticket = 800;

if(age < 10){
    let ticket = 0;
    console.log(ticket + " free for children");
}
else if(age > 10 && age < 20){
    // will get discount 50%
    let discount = ticket * 50 /100;
    let payAmount = ticket - discount;
    console.log(payAmount + " for students")
}
else if(age >= 60){
    //will get 15%
    let discount = ticket * 15 / 100;
    let payAmount = ticket - discount;
    console.log(payAmount + " for senior citizens");
}
else {
    console.log('you have to pay ' + ticket);
}

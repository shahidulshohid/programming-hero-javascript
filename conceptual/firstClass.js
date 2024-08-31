
// //get out truthy value and false value
// var x = "islam";
// console.log(!!x);
// var y = false;
// console.log(!!y);

// //flik kora ba ultano false theme true ///true theke false
// var x = false;
// console.log(!x);

// var y = true;
// console.log(!y)

// //square and quep kora
// var x = 3;
// console.log(x ** 2);
// console.log(x ** 5);
// console.log(x ** 3);

// //if else condition
// var isRaining = false;
// if(!isRaining){
//     console.log('will not go outside');
// }
// else {
//     console.log('will go outside')
// }

//ternary operator
var isRaining = true;
!isRaining ? console.log("will not go outside") : console.log("will go outside");

//multiple condition
var money = 20;
var isRaining = false;
var taxi = 15;
// if(isRaining === true && money >= taxi){
//     console.log("will go outside");
// }
//  else {
//     console.log("will not go outside");
    
//  }

if(isRaining === true || money >= taxi){
    console.log('will go to market');
}
else {
    console.log('will not go to market');
    
}
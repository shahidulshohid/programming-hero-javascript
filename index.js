// //for run more than one variables
// // ===========================
// var num1 = "value1";
// var num2 = "value2";
// var num3 = "value3";
// console.table ([num1, num2, num3])

// // use slice and splice
// var bestFriend = ['shahidul', 'al-amin', 'setu', 'shakkhor', 'faruk', 'momin', 'mukter'];
// // console.log(bestFriend.slice(2, 6));
// console.log(bestFriend.splice(0, 3, 'mahmudullah'));
// console.log(bestFriend);

// practice first logical thing from making decision in your code website
//======================================== one number
// const select = document.querySelector("select");
// const para = document.querySelector("p");
// select.addEventListener("change", weather);
// function weather() {
//   const choose = select.value;
//   if (choose === "sunny") {
//     para.textContent = "Today is sunny day";
//   } else if (choose === "rainy") {
//     para.textContent = "Tody is rainy day";
//   } else if (choose === "snowing") {
//     para.textContent = "Tody is snowing day";
//   } else if (choose === "overcast") {
//     para.textContent = "Tody is overcast day";
//   }
// }

// //================================ two number
// const select = document.querySelector('select');
// const para = document.querySelector('p');
// select.addEventListener('change', weather);
// const temperature = 86;
// function weather (){
//     const choose = select.value;
//     if(choose === 'sunny'){
//         if(temperature < 86){
//             para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
//         }
//         else if(temperature >= 86){
//             para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
//         }
//     }
//     else {
//         para.textContent = `There is no set like this condition here like ======== ${choose}`
//     }
// }

// another practice 
// const iceCreamVanOutside = true;
// const houseStatus = 'on fire'
// if (!(iceCreamVanOutside || houseStatus === "on fire")) {
//     console.log("Probably should just stay in then.");
//   } else {
//     console.log("You should leave the house quickly.");
//   }
//=====================
// use splice()
// const array = ['shahidul','islam','ahomed','alamin','lolla', 'vlai']
// const result = array.splice(1,2, 'huda', 'buda')
// console.log('==================', array)
// console.log(result)
  
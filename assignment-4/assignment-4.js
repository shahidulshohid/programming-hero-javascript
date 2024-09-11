// problem solve 1==============================================================
function calculateTax(income, expenses) {
  if (income < expenses || expenses < 0) {
    return "Invalid Input";
  }
  const total = income - expenses;
  const tax = total * .20;

  return tax;
}

// problem solve 2===========================================================================
function sendNotification(email) {
  if(email.includes('@') === false){
      return  "Invalid Email"
  }
  const str = email.split("@");
  const userName = str[0];
  const domainName = str[1];
  const notification = userName + " sent you an email from " + domainName;
  return notification;
}

// problem solve 3====================================================================
function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return 'Invalid Input'
  }
  for(const char of name){
    if(!isNaN(char)){
      return true;
    }
}
return false
}

// problem solve 4==================================================

function calculateFinalScore(obj) {
  if(typeof obj !== 'object'){
    return 'Invalid Input';
  }
    let total_marks = obj.testScore + obj.schoolGrade;

    if(obj.isFFamily){
      total_marks = total_marks + 20;
    }

    if(total_marks >= 80){
      return true;
    }
    else {
      return false;
    }
}

// problem solve 5=================================================================
function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
    return 'Invalid Input'
  }
  let sum = 0;
  for(const num of waitingTimes){
    sum = sum + num;
  }
  let average = Math.round(sum / waitingTimes.length)
  const remainingMan = serialNumber - 1 - waitingTimes.length;
  const waitingTime = average * remainingMan;

  return waitingTime;
}
console.log(waitingTime([7, 8, 3, 4, 5], "9"));


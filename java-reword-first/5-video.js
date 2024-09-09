function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid Input";
  }
  //   calculate total income
  let totalIncome = 0;
  for (let payment of arr) {
    if (payment >= 3000) {
      // deduct tax amount
      let tax = payment * 0.2;
      totalIncome = totalIncome + payment - tax;
    } else {
      totalIncome = totalIncome + payment;
    }
  }
  let savings = totalIncome - livingCost;
 if(savings >= 0){
    return savings;
 }
 else {
    return 'learn more';
 }
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([9000, 27000, 34000], 100000));
console.log(monthlySavings(100000, [9000, 27000, 34000]));

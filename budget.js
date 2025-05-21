 /**Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/


const totalBudget = [
      
     {name: 'Laptop', price: 35000},
     {name: 'tablet', price: 15000},
     {name: 'mobile', price: 20000}, 
]


function getBudget (totalBudget){
      let sum = 0;
      for(const totalBud of totalBudget){
            // console.log(totalBud);
           sum = sum + totalBud.price;

      }
      return sum;
}

const total = getBudget(totalBudget);
console.log('total budget is :', total);
function multiply(num1, num2){
      if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return 'Please provide a number'
      }
      const mult = num1 * num2;
      return mult;
}

const result = multiply('5', 'seven');
// console.log(result);

function fullName (first, secod) {
      if(typeof first !== 'strin'){
            return 'first name shoud, string';
      }
      else if (typeof secod !== String){
            return 'seccon';
      }
      const full = first + ' ' + secod;
      return full;
}

const full = fullName('drive');
// console.log(full);

function getPrice(product){
      // console.log(typeof product)
      if(typeof product !== 'object'){
            return 'please provide an object';
      }
      const price = product.price;
      return price;
}
// const price = getPrice({name: 'chulkani dandi', price: 35, color: 'blue'});
const price = getPrice(5);
console.log(price)

function getSecond(numbers){
      // console.log(Array.isArray(numbers))
     if(Array.isArray(numbers) === false){
      return 'please provid a number'
     }
      // console.log(typeof numbers);
      const second = numbers[1];
      return second;
}

const second = getSecond([54,43,34,]);
console.log(second);
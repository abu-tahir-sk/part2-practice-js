const jim = 56;
const tim = 84;
const kim = 68;

if (jim > tim && jim > kim){
      console.log('jim is the ultimate boss')
}
else if (tim > jim && tim > kim) {
      console.log('tim is the boss')
}
else{
      console.log('Kim is the kardashians boss')
}

function maxOfThree (num1, num2, num3) {
      if(num1 > num2 && num1 > num3){
            return num1;
      }
      else if(num2 > num1 && num2 > num3){
            return num2;
      }
      return num3;
}

const max = maxOfThree(78, 56, 87);
console.log(max)


const maxs = Math.max(12, 32, 54, 65, 78, 8,97);
console.log('max isuing Math.max', maxs)
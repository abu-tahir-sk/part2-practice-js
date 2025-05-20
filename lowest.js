// Task -1:
// Find the lowest number in the array below.


const heights2 = [167, 190, 120, 165, 137];

function getMin(numbers){
      let min = numbers[0];
      for(const num of numbers){
            // console.log(num)
            if(num < min){
                  min = num;
            }
      }
      return min;
}

const cheap = getMin(heights2);
console.log('cheapest one is :', cheap);
// output min 120
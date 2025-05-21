// Task -2:
// Find the friend with the smallest name.


const friends = ['rahim', 'robin', 'rafio', 'ron', 'rashed'];

function findSmallestName(names){
      let min = names[0];
      for(let i = 1; i < friends.length; i++) {
            if (friends[i].length < min.length) {
                  min = friends[i];
            }
      }
      return min;
}


const cheap = findSmallestName(friends);
console.log('choto name er fried :', cheap);



/**
 * choto name er fried : ron.
 */
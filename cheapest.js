// const phones = [
//       {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
//       {name: 'Xoami', price: 18000, camera: '12mp', color: 'black'},
//       {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
//       {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
//       {name: 'Walton', price: 310000, camera: '12mp', color: 'black'},
//       {name: 'HTC', price: 270000, camera: '12mp', color: 'black'},
// ]


// function getChestPhone(phones){
//       // console.log(phones);
//       let min = phones[0];
//       for(const phone of phones){
//             if(phone.price < min.price){
//                   min = phone

//             }
//       }
//       return min;
// }

// const chest = getChestPhone(phones);
// console.log(chest);
const phones = [
      {name: 'samsung', price: 20000, camera: '12mp', color: 'black'},
      {name: 'Xoami', price: 18000, camera: '12mp', color: 'black'},
      {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
      {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
      {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
      {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]


function getChestPhone(phones){
      // console.log(phones);
      let min = phones[0];
      for(const phone of phones){
            if(phone.price > min.price){
                  min = phone

            }
      }
      return min;
}

const chest = getChestPhone(phones);
console.log(chest);
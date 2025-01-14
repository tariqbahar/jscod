// /////////////////////****************************Task One********************************/////////////////////////////////

// // const name=prompt('hello enter you name');
// // const value=name.trim()
// // if (!value) {
// //     alert(`welcome ${name}`)

// // }else{alert('hello stranger')}

// /////////////////////****************************Task two********************************/////////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // let sum=numbers.reduce(function(a,b){return a+b}, 2)
// let sum = numbers.reduce((acc, curr) => acc + curr, 10);
// console.log(sum);
// //////////////////******************************* Task three ***************************************//////////////////////////////

const students = ["tariq", "bahar", "subhank", "Ali"];
const stmarks = [67, 96, 50, 94];
// let average = stmarks.reduce((a, b) => {
//   return a + (b / 100) * stmarks.length;
// });
let average = stmarks.reduce((a, b) => {
  return a + b
}, 0)/stmarks.length;

console.log(Math.floor(average));

console.log(
  students.forEach((elements, index) => {
    // console.log(elements);
    console.log(
      elements + " " + stmarks[index],
      stmarks[index] > average ? "above average:" : "below average"
    );
  })
);

// ///////////////////****************************Task four********************************/////////////////////////////////
const customerData = [
  { name: "Laptop", Price: 200, Quantity: 2 },
  { name: "Hed phone", Price: 40, Quantity: 1 },
  { name: "iphone", Price: 300, Quantity: 1 },
  { name: "Car", Price: 5000, Quantity: 1 },
];
let price = customerData.map((item) => item.Price);
console.log(price);
let totalPrice = price.reduce(function (item, setitem) {
  return item + setitem;
});
console.log(totalPrice);

// console.log(customerData.filter(function(item) { return item.name}))

console.log(customerData.filter(function(item) { return item.Price > 50}))

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

const subtitle = cartItems.reduce((subtotal, product)=> {
  return subtotal + product.price * product.quantity;
}, 0)
console.log(subtitle);

// FIND BEST SCORAR 

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];
const bestScorar = players.reduce((bestPlayer, player) => {
if(bestPlayer.score > player.score){
    return bestPlayer
}
return player
}, players[0])
console.log(bestScorar);
// LOOK UP TABLE 
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];
const lookupTable = postsArray.reduce((acc,curr) => {
  acc[curr.id] = curr
  return acc
})
// console.log(lookupTable);
for(let post in lookupTable ){
  // console.log(post);
  // console.log(lookupTable[post]);

}
// GROUPING DATA 
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
const countingValue = surveyResponses.reduce((acc, curr) => {
  // if(acc[curr]){
  //   acc[curr]++
  // }
  // else{
  //   acc[curr] = 1;
  // }
  console.log(acc);
  acc[curr] = (acc[curr]  || 0) + 1;
  return acc
}, {})
// console.log(countingValue);
const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

// console.log(counts);
// todo empty object 
// todo obj category 
// todo catculate revenue 
const counts = sales.reduce((acc, curr) => {
  const {category, quantity, price} = curr
  if(!acc[category]){
    acc[category] = {
      totalRevenue : 0,
      itemsCount: 0,
    }
  }
  acc[category].totalRevenue += price * quantity;
  acc[category].itemsCount += quantity;
  return acc
}, {})
console.log(counts);

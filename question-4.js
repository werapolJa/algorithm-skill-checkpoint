function sortProductsByPrice(products) {
  // Your code here

  let n = products.length

  for (let i = 0; i < n - 1; i++) {
   for (let j = 0; j < n - i - 1; j++) {
     if (products[j].price > products[j + 1].price) {
      //  console.log(products[j].price);
      //  console.log(products[j]);
      //  console.log(products[i+1]);
       let temp = products[j];
       products[j] = products[j + 1];
       products[j + 1] = temp;
     }
   }
   return products
 }

}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]

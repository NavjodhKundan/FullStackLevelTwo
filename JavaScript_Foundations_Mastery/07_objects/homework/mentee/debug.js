// ============================================================
// 🐛  OBJECTS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the product's category but logs undefined.

const product = {
  name:     "Laptop",
  price:    999,
  category: "Electronics",
  stock:    10
};

console.log(product.Category);

// What's wrong ↓
// category used on log is with capital C and that is undefined
// Your fix ↓
console.log(product.category);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should log each product's name and price.
// It logs "undefined undefined" for every product. Why?

const inventory = [
  { Name: "Shirt",  Price: 29.99 },
  { Name: "Jeans",  Price: 59.99 },
  { Name: "Jacket", Price: 89.99 }
];

for (let i = 0; i < inventory.length; i++) {
  console.log(inventory[i].name + " — $" + inventory[i].price);
}

// What's wrong ↓
// variable names doe not match 
// Your fix ↓
console.log(inventory[i].Name + " -$" + inventory[i].price);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all products
// (price × stock) and log it. It logs NaN. There are TWO bugs.

const products = [
  { name: "Phone",   price: 699, stock: 15 },
  { name: "Tablet",  price: 499, stock: 8  },
  { name: "Monitor", price: 329, stock: 12 }
];

let totalValue = 0;

for (let i = 0; i <= products.length; i++) {
  totalValue += products[i].price * products.stock;
}

console.log("Total value: $" + totalValue);

// Bug 1 ↓
// on line 66 for stock there is no i value assigned
// Bug 2 ↓
// we car comparing i with less than and equal to product length with will return false
// Your fix ↓

// totalValue += products[i].price * products[i].stock;
// for (let i = 0; i < products.length; i++){...}
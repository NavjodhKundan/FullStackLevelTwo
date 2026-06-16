// ============================================================
// 🐛  VARIABLES — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment before your fix.
// Run the file to confirm each fix works.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This throws an error. What's wrong and how do you fix it?

const storeName = "TechMart";
storeName = "MegaShop";
console.log(storeName);

// What's wrong ↓
// We are trying to change constant variable, which is not allowed
// Your fix ↓
// We can change storeName to let variable


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This runs but the output is wrong. Find the bug.

let item1Price = 19.99;
let item2Price = 34.99;
let orderTotal = item1Price + Item2Price;
console.log("Total: $" + orderTotal);

// What's wrong ↓
// Wrong variable name used on line 33 for item2Price
// Your fix ↓
// correct name we should use is item2Price

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code runs without throwing an error,
// but something is still wrong with it.
// Find the issue and explain why it's a problem.

var productName = "Headphones";
var productPrice = 49.99;
console.log(productName + " — $" + productPrice);

// Hint: the code works, but what keyword should you be using instead?
// Why is the current keyword considered bad practice?
// harder to maintain as it a function base keyword not block based key word
// What's wrong ↓
// We should use let or var keyword not var
// Your fix ↓
// replace var keyword with let and const
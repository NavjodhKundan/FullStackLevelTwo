// ============================================================
// 🏠  VARIABLES — HOMEWORK
// ============================================================
// Complete each task using only what you learned in class:
//   - const and let
//   - declaring, assigning, reassigning
//   - console.log()
//   - string + number combination with +
//
// No DOM. No HTML edits. Open DevTools to see your output.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Your personal profile
// ----------------------------------------------------------
// Declare the following using the correct keyword (const or let).
// Add a comment next to each one explaining WHY you chose that keyword.
//
//   fullName    → your full name as a string
//   age         → your age as a number
//   city        → the city you live in
//   isStudent   → true or false
//
// Log all four to the console.

console.log("Task 1");
const fullName = "Navjodh Singh Kundan";//student will never change name
console.log(fullName);
let age = 26;//age will grow every year
console.log(age);
let city = "Surrey, BC";//student might change the city
console.log(city);
let isStudent = true;//student can take a break
console.log(isStudent);

// ----------------------------------------------------------
// TASK 2 — Update what can change
// ----------------------------------------------------------
// Reassign city to a different city.
// Reassign isStudent to the opposite value.
// Log both after reassigning.
//
// Then try to reassign fullName.
// Read the error, then comment that line out.

console.log("Task 2");
city = "Vancouver, BC";
isStudent = false;
console.log(city);
console.log(isStudent);
//fullName = "Nav";
//app.js:51 Uncaught TypeError: Assignment to constant variable.

// ----------------------------------------------------------
// TASK 3 — Undefined in the wild
// ----------------------------------------------------------
// Declare a let called favoriteMovie — do NOT assign a value.
// Log it. Write what you see as a comment.
//
// Now assign it a movie title.
// Log it again.

console.log("Task 3");
let favoriteMovie;
console.log(favoriteMovie); //undefined
favoriteMovie = "Jonh Wick: Chapter 4";
console.log(favoriteMovie);

// ----------------------------------------------------------
// TASK 4 — Build a product listing
// ----------------------------------------------------------
// You're building a small online store.
// Declare const variables for:
//
//   productName  → a made-up product name
//   productBrand → the brand name
//   productPrice → a price as a number
//   inStock      → true
//
// Log each variable on its own line.
// Then log: productName + " by " + productBrand + " — $" + productPrice

console.log("Task 4");
const productName = "coffee cup";
console.log(productName);
const productBrand = "Tim Hortans";
console.log(productBrand);
const productPrice = 4.99;
console.log(productPrice);
let inStock = true;
console.log(inStock);
console.log(productName + " by " + productBrand + " for $" + productPrice);

// ----------------------------------------------------------
// TASK 5 — Stock status update
// ----------------------------------------------------------
// Reassign inStock to false.
// Log: "In stock: " + inStock
//
// Try to reassign productName.
// Read the error and comment the line out.
// Why did this fail but inStock worked?
// Write your answer as a comment.

console.log("Task 5");
inStock = false;
console.log("In Stock: "+inStock);
//productName = "Chai cup";
//Because inStock is declerad as let variable whick allows the variable to change
//where as productName is declared as constont variable which prevents the variable to chnage once it is assigned.

// ----------------------------------------------------------
// TASK 6 — Fix the bad names
// ----------------------------------------------------------
// The variable names below are all invalid or poor practice.
// Rewrite each one correctly, declare it with any value, and log it.
//
//   2ndPlayer     → fix it
//   my score      → fix it
//   X             → rename to something descriptive, then declare it
//   GaMeLeVeL     → fix the casing

console.log("Task 6");
const secondPlayer = "player2";
console.log(secondPlayer);
let myScore = 100;
console.log(myScore);
let powerX = "fire";
console.log(powerX);
let gameLevel = "Level 1";
console.log(gameLevel);

// ----------------------------------------------------------
// TASK 7 — Two-step declaration
// ----------------------------------------------------------
// Declare a let called highScore — do NOT assign a value.
// Log it.
//
// Assign highScore the value 500.
// Log it.
//
// Reassign highScore to 750.
// Log it.
//
// You should see three console lines: undefined → 500 → 750

console.log("Task 7");
let highScore;
console.log(highScore);
highScore = 500;
console.log(highScore);
highScore = 750;
console.log(highScore);

// ----------------------------------------------------------
// TASK 8 — Connect the variables
// ----------------------------------------------------------
// Declare these consts:
//   appName    → "TaskMaster"
//   version    → 3
//   authorName → your name
//
// Log: appName + " v" + version + " — built by " + authorName
// Expected format: "TaskMaster v3 — built by [your name]"

console.log("Task 8");
const appName = "TaskMaster";
const version = 3;
const authorName = "Navjodh Singh Kundan";

console.log(appName+" v"+version+" - built by "+authorName);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL
// ----------------------------------------------------------
// Declare a const called startYear with the value 2020.
// Declare a const called currentYear with the value 2025.
// Declare a let called yearsRunning = currentYear - startYear.
//
// Log: appName + " has been running for " + yearsRunning + " years."
//
// Then reassign currentYear... wait, can you? Why not?
// Write the answer as a comment.
// What keyword would you need if currentYear could change?

console.log("STRETCH GOAL");
const startYear = 2020;
const currentYear = 2025;
let yearsRunning = currentYear - startYear;
console.log(appName+" has been running for "+ yearsRunning+" years");

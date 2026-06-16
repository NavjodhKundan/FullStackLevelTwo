// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// % is used to calculate the result. % will give remainder value not the currect result
// Your fix ↓
// we can use the formula billAmount*(tipPercent/100)

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
// we are using const to declare the variable which will nor allow us to update the countdown variable
// Your fix ↓
//change decleration of countdown from const to let

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
// we are using == operator, it will only comapre address value not the variable value
// Style issue 1 ↓
// use of const or let keywords insted of var keyword
// Style issue 2 ↓
// changing variable names to userName1 and userName2
// Your fix ↓
// we can use === operator with will compare the variable values along with address
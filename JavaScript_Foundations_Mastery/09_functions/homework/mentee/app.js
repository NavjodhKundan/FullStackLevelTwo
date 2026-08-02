// ============================================================
// 🏠  FUNCTIONS — HOMEWORK
// ============================================================
// Mini Project: User Account Manager
//
// Every task specifies WHICH function style to use.
// By the end you will have written all four styles
// in a realistic context.
//
// Function style guide:
//   DECLARATION  → function name(params) { }
//   EXPRESSION   → const name = function(params) { }
//   ANONYMOUS    → function(params) { }   (passed directly as callback)
//   ARROW        → const name = (params) => value
//
// All output goes to the console. No HTML edits needed.
// ============================================================
// ============================================================
// THE DATA — do not modify
// ============================================================
const users = [
  {
    id: 1,
    username: "alexdev",
    email: "alex@email.com",
    age: 28,
    isPremium: true,
    loginCount: 142,
  },
  {
    id: 2,
    username: "samcodes",
    email: "sam@email.com",
    age: 16,
    isPremium: false,
    loginCount: 37,
  },
  {
    id: 3,
    username: "zoedesign",
    email: "zoe@email.com",
    age: 34,
    isPremium: true,
    loginCount: 289,
  },
  {
    id: 4,
    username: "liamdev",
    email: "",
    age: 25,
    isPremium: false,
    loginCount: 8,
  },
  {
    id: 5,
    username: "mia99",
    email: "mia@email.com",
    age: 19,
    isPremium: true,
    loginCount: 56,
  },
  {
    id: 6,
    username: "carlosui",
    email: "carlos@email.com",
    age: 22,
    isPremium: false,
    loginCount: 0,
  },
];

// ----------------------------------------------------------
// TASK 1 — createUser  [FUNCTION DECLARATION]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION (function keyword, named).
//
// Parameters: username, email, age, isPremium = false
// Returns a new user object:
//   { id: Date.now(), username, email, age, isPremium, loginCount: 0 }
//
// Call it twice with different data. Log both results.
// Write a comment: why is isPremium = false a good default here?

console.log("----------Task 1----------");
function createUser(username, email, age, isPremium=false){
  return {id: Date.now(), username: username, email: email, age: age, isPremium: isPremium, loginCount: 0};
}
const result1 = createUser("Navjodh", "example1@gmail.com", 26);
const result2 = createUser("Ricky", "example2@gmail.com", 25, true);
console.log(
  "Id: " + result1.id + 
  ", username: " + result1.username + 
  ", email: " + result1.email + 
  ", age: " + result1.age + 
  ", isPremium: " + result1.isPremium + 
  ", loginCount: " + result1.loginCount
);
console.log(
  "Id: " + result2.id + 
  ", username: " + result2.username + 
  ", email: " + result2.email + 
  ", age: " + result2.age + 
  ", isPremium: " + result2.isPremium + 
  ", loginCount: " + result2.loginCount
);
//Yes, I think user will be happy to do less work.

// ----------------------------------------------------------
// TASK 2 — isValidUser  [FUNCTION EXPRESSION]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION (stored in a const).
//
// Parameter: user (object)
// Returns true only if ALL of these pass:
//   user.username.length > 0
//   user.email.length > 0
//   user.age >= 13
//
// Use && to combine all three in a single return statement.
//
// Use forEach with an ANONYMOUS function callback to test
// every user in the users array:
//   users.forEach(function(user) {
//     console.log(user.username + " valid: " + isValidUser(user));
//   });
//
// Write a comment: why is isValidUser a function EXPRESSION
// instead of a DECLARATION here?

console.log("----------Task 2----------");
const isValidUser = function(user){
  return user.username.length > 0 && user.email.length > 0 && user.age >= 13;
}
users.forEach(function(user){
  console.log(user.username + " valid: " + isValidUser(user));
});
//because we are storing it in a variable and declearing it before calling

// ----------------------------------------------------------
// TASK 3 — formatUserDisplay  [ARROW FUNCTION + TERNARY]
// ----------------------------------------------------------
// Write as an ARROW FUNCTION stored in a const.
// Use a one-liner (implicit return — no braces, no return keyword).
//
// Parameter: user
// Returns:
//   user.username + " | " + user.email
//   + " | " + (user.isPremium ? "⭐ Premium" : "Free")
//   + " | Age: " + user.age
//
// Pass formatUserDisplay directly (no () !) to forEach to log
// every user's display string:
//   users.forEach(formatUserDisplay — but this would only receive
//   the user, so wrap it:
//   users.forEach(user => console.log(formatUserDisplay(user)));
//
// Write a comment: why is an arrow function a good fit here?

console.log("----------Task 3----------");
const formatUserDisplay = (user) => user.username + " | " + 
  (user.isPremium ? "Premium" : "Free") + " | Age: " + user.age + 
  " | Email: " + user.email;
users.forEach(user => console.log(formatUserDisplay(user)));
//we are only returing one line and implementing other code so it is a good idea to user one line of code

// ----------------------------------------------------------
// TASK 4 — getUserById  [FUNCTION DECLARATION + TERNARY]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
//
// Parameters: userList (array), id (number)
// Uses find (with an arrow callback) to locate the matching user.
// Returns the found user OR null using a ternary:
//   return found ? found : null;
//
// Test with id 3 (should find Zoe) and id 99 (should return null).
// Log both results.

console.log("----------Task 4----------");
function getUserById (userList, id){
  let found = "";
  userList.forEach(user => user.id === id ? found=user : null);
  return found ? found : null;
}
console.log(getUserById(users, 3));
console.log(getUserById(users, 99));

// ----------------------------------------------------------
// TASK 5 — filterByAge  [FUNCTION EXPRESSION + DEFAULT PARAM]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION stored in a const.
//
// Parameters: userList, minAge, maxAge = 100
// Returns: userList filtered to users where
//   user.age >= minAge && user.age <= maxAge
// Use an ARROW FUNCTION as the filter callback.
//
// Test three calls:
//   filterByAge(users, 18)       → adults only
//   filterByAge(users, 18, 25)   → young adults
//   filterByAge(users, 13, 17)   → teens
//
// For each result, log the count and usernames using map.

console.log("----------Task 5----------");

const filterByAge = function(userList, minAge, maxAge = 100){
  return userList.filter(user => 
    user.age >= minAge && user.age <= maxAge
  );
};

let count = 0;
const userByAge = filterByAge(users, 18).map(function(user){
  count++;
  return user.username;
});
userByAge.forEach(user => {
  console.log(user);
})

// ----------------------------------------------------------
// TASK 6 — getAccountStats  [FUNCTION DECLARATION]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
//
// Parameter: userList
//
// Use reduce with an ARROW callback to get totalLogins.
// Use filter with isValidUser passed DIRECTLY (no anonymous wrapper):
//   userList.filter(isValidUser)   ← pass the function, don't call it
//
// Returns:
//   {
//     totalUsers:   userList.length,
//     totalLogins:  totalLogins,
//     premiumCount: number of premium users,
//     validCount:   number of valid users,
//     avgLogins:    totalLogins / userList.length
//   }
//
// Call it with the users array. Log the result.
// Write a comment: what does passing isValidUser (without ())
// to filter do differently than passing isValidUser()?

console.log("----------Task 6----------");
function getAccountStats(userList){
  const totalLogins = userList.reduce(function(acc, user){
    return acc+user.loginCount;
  }, 0);
  userList.filter(isValidUser);
  let premiumCount = 0;
  userList.forEach(user => user.isPremium === true ? premiumCount++ : "");
  let validCount = 0;
  userList.forEach(user => isValidUser(user) ? validCount++ : "");
  return {totalUsers: userList.length, totalLogins: totalLogins, 
    premiumCount: premiumCount, validCount: validCount,
    avgLogins: totalLogins/userList.length};
}
console.log(getAccountStats(users));


// ----------------------------------------------------------
// TASK 7 — promoteUser  [ARROW FUNCTION]
// ----------------------------------------------------------
// Write as an ARROW FUNCTION stored in a const.
// One-liner is fine here.
//
// Parameter: user
// Sets user.isPremium = true.
// Returns the updated user.
//
// Find the user with id 2 (Sam). Log before. Promote. Log after.
//
// Write a comment: why does mutating user.isPremium inside an
// arrow function affect the original object?
// (Hint: objects vs primitives — pass by reference vs value)

console.log("----------Task 7----------");
const promoteUser = (user) => {user.isPremium = true; return user};
users.forEach(function(user){
  if(user.id === 2){
    console.log(user);
    console.log(promoteUser(user));
  }
});
//because it is stored in an object in a memory so changing the object will be 
//affected in memory.

// ----------------------------------------------------------
// TASK 8 — processAccounts  [FUNCTION DECLARATION composing all styles]
// ----------------------------------------------------------
// Write as a FUNCTION DECLARATION.
// Inside it, call: isValidUser, filterByAge, formatUserDisplay,
// getAccountStats — all functions you already wrote.
//
// Parameter: userList
//
// Steps:
//   1. Filter invalid users using isValidUser → validUsers
//   2. Filter validUsers to adults (>= 18) using filterByAge → adultUsers
//   3. Map adultUsers → display strings using formatUserDisplay → displayList
//      Use an ANONYMOUS function for the map callback:
//        adultUsers.map(function(user) { return formatUserDisplay(user); })
//   4. Get stats from the full userList → stats
//   5. Return { displayList, stats, skipped: userList.length - validUsers.length }
//
// Call processAccounts(users). Log the result.
// forEach through result.displayList logging each line.

console.log("----------Task 8----------");
function processAccounts(userList){
  const validUser = [];
  userList.forEach(user => isValidUser(user) ? validUser.push(user) : "");
  const adultUsers = filterByAge(validUser, 18);
  const displayList = adultUsers.map(function(user){
    return formatUserDisplay(user);
  });
  const stats = getAccountStats(userList);
  return {displayList, stats, skipped: userList.length-validUser.length};
}
const result = processAccounts(users);
result.displayList.forEach(user => console.log(user));

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — searchUsers  [FUNCTION EXPRESSION]
// ----------------------------------------------------------
// Write as a FUNCTION EXPRESSION.
//
// Parameters: userList, query (string), field = "username"
// Returns users where user[field] contains query.
// Use filter with an arrow callback: u => u[field].includes(query)
//
// Test:
//   searchUsers(users, "dev")              → alexdev, liamdev
//   searchUsers(users, "email.com","email")→ all with email addresses
//   searchUsers(users, "a")               → all with "a" in username
//
// Write a comment: why must you use u[field] instead of u.field?

console.log("----------Stretch Goal----------");
const searchUsers = function(userList, query, field = "username"){
  const result = userList.filter(user => user[field].includes(query));
  return result;
}
console.log(searchUsers(users, "dev"));
console.log(searchUsers(users, "email.com","email"));
console.log(searchUsers(users, "a"));
//because field is a variable not a object in users.
//if passed u.filed it will pass as a variable and try to find "field" object
//where as u.[filed] will pass a variable provided by user.
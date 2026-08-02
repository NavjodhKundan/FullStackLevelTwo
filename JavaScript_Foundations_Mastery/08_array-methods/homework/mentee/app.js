// ============================================================
// 🏠  ARRAY METHODS — HOMEWORK
// ============================================================
// Mini Project: Order Processing System
//
// Process a set of customer orders using ONLY array methods.
// No manual for loops allowed for this homework.
// Every task must use forEach, map, filter, find, some,
// every, or reduce.
//
// All output goes to the console. No HTML edits needed.
// ============================================================

// ============================================================
// THE DATA — do not modify this
// ============================================================
const orders = [
  {
    id: 1001,
    customer: "Maya Chen",
    total: 124.99,
    status: "delivered",
    items: 3,
    isPriority: false,
  },
  {
    id: 1002,
    customer: "Liam Torres",
    total: 49.99,
    status: "pending",
    items: 1,
    isPriority: true,
  },
  {
    id: 1003,
    customer: "Sofia Patel",
    total: 239.5,
    status: "delivered",
    items: 5,
    isPriority: true,
  },
  {
    id: 1004,
    customer: "Ethan Kim",
    total: 18.0,
    status: "cancelled",
    items: 1,
    isPriority: false,
  },
  {
    id: 1005,
    customer: "Zoe Williams",
    total: 89.99,
    status: "pending",
    items: 2,
    isPriority: false,
  },
  {
    id: 1006,
    customer: "Carlos Ruiz",
    total: 310.0,
    status: "delivered",
    items: 7,
    isPriority: true,
  },
  {
    id: 1007,
    customer: "Ava Johnson",
    total: 55.25,
    status: "pending",
    items: 2,
    isPriority: false,
  },
];

// ----------------------------------------------------------
// TASK 1 — Display all orders (forEach)
// ----------------------------------------------------------
// Use forEach to log a summary of every order.
// Format each line as:
//   "#" + order.id + " | " + order.customer
//   + " | $" + order.total
//   + " | " + order.status.toUpperCase()

console.log("----------Task 1----------");
orders.forEach(function(order){
  console.log("#"+order.id+" | "+order.customer+" | $"+order.total+" | "+order.status.toUpperCase());
});

// ----------------------------------------------------------
// TASK 2 — Build receipt strings (map)
// ----------------------------------------------------------
// Use map to create a new array called receipts.
// Each element should be a formatted string:
//   "Order #" + order.id + " — " + order.customer
//   + " — $" + order.total + " (" + order.items + " item(s))"
//
// Log receipts.length to confirm it matches orders.length.
// Use forEach on receipts to log each one.

console.log("----------Task 2----------");
const receipts = orders.map(function(order){
  return "Ordere #" + order.id + " - " + order.customer + " - $" + order.total + " (" + order.items + " item(s))";
});
console.log(receipts.length === orders.length);
receipts.forEach(function(receipt){
  console.log(receipt);
});

// ----------------------------------------------------------
// TASK 3 — Build order summary objects (map)
// ----------------------------------------------------------
// Use map to create a new array called summaries.
// Each element should be a NEW object with only:
//   { id: order.id, customer: order.customer, total: order.total }
//
// Log summaries.

console.log("----------Task 3----------");
const summaries = orders.map(function(order){
  return {id: order.id, customer: order.customer, total: order.total};
});
summaries.forEach(function(summary){
  console.log("#" + summary.id + " | " + summary.customer + " | $" + summary.total);
});

// ----------------------------------------------------------
// TASK 4 — Filter by status (filter)
// ----------------------------------------------------------
// Use filter to get only delivered orders → store in deliveredOrders.
// Use filter to get only pending orders   → store in pendingOrders.
// Use filter to get only cancelled orders → store in cancelledOrders.
//
// Log:
//   "Delivered: " + deliveredOrders.length
//   "Pending:   " + pendingOrders.length
//   "Cancelled: " + cancelledOrders.length

console.log("----------Task 4----------");
const deliveredOrders = orders.filter(function(order){
  return order.status === "delivered";
});
const pendingOrders = orders.filter(function(order){
  return order.status === "pending";
});
const cancelledOrders = orders.filter(function(order){
  return order.status === "cancelled";
});
console.log("Delivered: " + deliveredOrders.length);
console.log("Pending: " + pendingOrders.length);
console.log("Cancelled: " + cancelledOrders.length);

// ----------------------------------------------------------
// TASK 5 — High value orders (filter + map chained)
// ----------------------------------------------------------
// Use filter to get orders with total > 100.
// Chain map to extract just the customer names.
// Store the result in highValueCustomers.
//
// Log: "High value customers: " + highValueCustomers

console.log("----------Task 5----------");
const highValueCustomers = orders
  .filter(function(order){
    return order.total > 100;
  })
  .map(function(order){
    return order.customer;
  });
console.log("High value customers: " + highValueCustomers);

// ----------------------------------------------------------
// TASK 6 — Find a specific order (find)
// ----------------------------------------------------------
// Use find to locate the order with id === 1005.
// Store it in foundOrder.
// Log: "Found: " + foundOrder.customer + " — $" + foundOrder.total
//
// Then use find to search for id === 9999.
// Store it in missingOrder.
// Log missingOrder.
// Write a comment: what does find return when nothing matches?

console.log("----------Task 6----------");
const foundOrder = orders.find(function(order){
  return order.id === 1005;
});
console.log("Found: " + foundOrder.customer + " - $" + foundOrder.total);
const missingOrder = orders.find(function(order){
  return order.id === 9999;
});
console.log(missingOrder);
// it returned undefined because there is no such id ion the orders array.

// ----------------------------------------------------------
// TASK 7 — Ask questions about the data (some + every)
// ----------------------------------------------------------
// Write your prediction as a comment BEFORE each one, then run.
//
// Use some  → is there at least one priority order?
//   Log: "Has priority order: " + result     // prediction:
//
// Use some  → is there at least one order over $300?
//   Log: "Has $300+ order: " + result        // prediction:
//
// Use every → are ALL orders either delivered or pending?
//   Log: "All active: " + result             // prediction:
//
// Use every → do ALL priority orders have more than 1 item?
//   Hint: filter for isPriority first, then chain every
//   Log: "All priority multi-item: " + result // prediction:

console.log("----------Task 7----------");
// will return a order tha has a prority, but it will return the last element it finds
let result = orders.some(function(order){
  return order.isPriority === true;
});
console.log("Has priority order: " + result);
//it will return true
result = orders.some(function(order){
  return order.total > 300;
});
console.log("Has $300+ order: " + result);
//it will return false
result = orders.every(function(order){
  return order.status === "delivered" || order.status === "pending";
});
// it will return false
console.log("All active: " + result);
result = orders
.filter(function(order){
  return order.isPriority === true;
})
.every(function(order){
  return order.items > 1;
});
console.log("All prioroty multi-item: " + result);

// ----------------------------------------------------------
// TASK 8 — Calculate totals (reduce)
// ----------------------------------------------------------
// Use reduce to calculate the total revenue from ALL orders.
// Start the accumulator at 0.
// Store in totalRevenue.
// Log: "Total revenue: $" + totalRevenue
//
// Use reduce to count the total number of items across all orders.
// Store in totalItems.
// Log: "Total items ordered: " + totalItems
//
// Calculate and log the average order value:
//   const averageOrder = totalRevenue / orders.length
//   Log: "Average order value: $" + averageOrder

console.log("----------Task 8---------");
const totalRevenue = orders.reduce(function(acc, order){
  return acc + order.total;
}, 0);
console.log("Total revenue: $" + totalRevenue);
const totalItems = orders.reduce(function(acc, order){
  return acc + order.items;
}, 0);
console.log("Total items ordered: " + totalItems);
const averageOrder = totalRevenue/orders.length;
console.log("Average order value: $" + averageOrder);

// ----------------------------------------------------------
// TASK 9 — Connect the dots (filter + reduce)
// ----------------------------------------------------------
// Calculate the revenue from DELIVERED orders only.
//   Step 1: filter for delivered orders
//   Step 2: reduce to sum their totals
//   Store in deliveredRevenue.
//   Log: "Delivered revenue: $" + deliveredRevenue
//
// Calculate the revenue from PENDING orders only.
//   Same approach. Store in pendingRevenue.
//   Log: "Pending revenue: $" + pendingRevenue
//
// Then log:
//   "Unconfirmed revenue: $" + pendingRevenue
//   (This is money that hasn't been secured yet)

console.log("----------Task 9---------");
const deliveredRevenue = orders
.filter(function(order){
  return order.status === "delivered";
})
.reduce(function(acc, order){
  return acc+order.total;
}, 0);
console.log("Deliverd revenue: $" + deliveredRevenue);
const pendingRevenue = orders
.filter(function(order){
  return order.status === "pending";
})
.reduce(function(acc, order){
  return acc+order.total;
}, 0);
console.log("Deliverd revenue: $" + deliveredRevenue);
console.log("Unconfirmed revenue: $" + pendingRevenue);

// ----------------------------------------------------------
// TASK 10 — Full pipeline (all methods)
// ----------------------------------------------------------
// Build a priority order report in these steps:
//
// Step 1: filter orders where isPriority is true
//         → store in priorityOrders
//
// Step 2: use every on priorityOrders to check if ALL
//         priority orders have been delivered
//         → store in allPriorityDelivered
//         → log: "All priority delivered: " + allPriorityDelivered
//
// Step 3: use reduce on priorityOrders to get the
//         total value of priority orders
//         → store in priorityRevenue
//         → log: "Priority revenue: $" + priorityRevenue
//
// Step 4: use map on priorityOrders to build display strings:
//         "⚡ #" + order.id + " " + order.customer + " — $" + order.total
//         → store in priorityDisplay
//
// Step 5: use forEach on priorityDisplay to log each line

console.log("----------Task 10---------");
const priorityOrders = orders.filter(function(order){
  return order.isPriority === true;
})
const allPriorityDelivered = orders
.filter(function(order){
  return order.isPriority === true;
})
.every(function(order){
  return order.status === "delivered";
});
console.log("All priorty delivered: "+allPriorityDelivered);

const priorityRevenue = orders
.filter(function(order){
  return order.isPriority === true;
})
.reduce(function(acc, order){
  return acc + order.total;
}, 0);
console.log("Priority revenue: $" + priorityRevenue);

const propertyDisplay = orders
.filter(function(order){
  return order.isPriority === true;
})
.map(function(order){
  return "#" + order.id + " " + order.customer + " - $" + order.total;
});

propertyDisplay.forEach(function(display){
  console.log(display);
})

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Status report object (reduce)
// ----------------------------------------------------------
// Use reduce to build a SINGLE summary object from all orders.
// The object should have this shape:
//   {
//     totalOrders:    number,
//     totalRevenue:   number,
//     deliveredCount: number,
//     pendingCount:   number,
//     cancelledCount: number,
//     priorityCount:  number
//   }
//
// Start the accumulator as an object:
//   { totalOrders: 0, totalRevenue: 0, deliveredCount: 0,
//     pendingCount: 0, cancelledCount: 0, priorityCount: 0 }
//
// On each iteration, increment the right properties.
// Store the result in a const called report.
// Log report.
//
// Hint: inside the reduce callback, update acc properties and return acc.

console.log("----------STRETCH GOAL---------");
const report = orders.reduce(function(acc, order){
  acc.totalOrders++;
  acc.totalRevenue += order.total;
  order.status === "delivered"?acc.deliveredCount++ : "";
  order.status === "pending"?acc.pendingCount++ : "";
  order.status === "cancelled"?acc.cancelledCount++ : "";
  order.isPriority === true?acc.priorityCount++ : "";
  return acc;
}, {totalOrders: 0, totalRevenue: 0, deliveredCount: 0, pendingCount: 0, cancelledCount: 0, priorityCount: 0});

console.log("Total Orders: " + report.totalOrders +
  "\nTotal revenue: $" + report.totalRevenue + 
  "\nDelivered Count: " + report.deliveredCount + 
  "\nPending Count: " + report.pendingCount +
  "\nCancelled Count: " + report.cancelledCount +
  "\nPriority Count: " + report.priorityCount
);
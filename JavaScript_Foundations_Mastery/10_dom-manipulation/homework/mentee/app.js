// ============================================================
// 🏠  DOM MANIPULATION — HOMEWORK
// ============================================================
// Mini Project: Task Board
//
// Render a set of tasks from an array of objects to a
// three-column board. Use DOM manipulation to build each
// card, update the header counts, mark tasks complete,
// and remove tasks.
//
// RULE: All DOM operations must be inside named functions.
//       No loose DOM code at the top level.
//
// Open index.html in your browser to see the board.
// ============================================================

// ============================================================
// THE DATA — do not modify
// ============================================================
const tasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API documentation",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode support",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
  {
    id: 6,
    title: "Code review PR #42",
    assignee: "Sofia",
    priority: "medium",
    status: "todo",
  },
  {
    id: 7,
    title: "Deploy to staging",
    assignee: "Liam",
    priority: "high",
    status: "done",
  },
  {
    id: 8,
    title: "Update dependencies",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

const boardName = "Sprint 12 — Task Board";

// ----------------------------------------------------------
// TASK 1 — renderHeader
// ----------------------------------------------------------
// Declare a function called renderHeader.
// Parameter: taskList (array)
//
// Inside:
//   - Select #board-title and set its textContent to boardName
//   - Select #task-count and set its textContent to:
//     taskList.length + " tasks"
//
// Call renderHeader(tasks) at the bottom.

console.log("----------Task 1----------");
function renderHeader(taskList) {
  let boardTitle = document.querySelector("#board-title");
  boardTitle.textContent = boardName;
  let taskCount = document.querySelector("#task-count");
  taskCount.textContent = taskList.length + " tasks";
}


// ----------------------------------------------------------
// TASK 2 — createTaskCard  (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Inside, build and return a complete <li> element:
//
//   1. Create a <li> — add class "task-card"
//
//   2. Create a <p> for the title — add class "task-title"
//      Set its textContent to task.title
//
//   3. Create a <div> for meta — add class "task-meta"
//      Inside meta, create two <span> elements:
//        a) priority span — textContent: task.priority.toUpperCase()
//           add class: "priority-" + task.priority
//           (e.g. class="priority-high" for high priority)
//        b) assignee span — textContent: "👤 " + task.assignee
//
//   4. Append title and meta to the <li>
//
//   5. If task.status === "done" → add class "completed" to the <li>
//
//   6. Return the <li>
//
// Do NOT append it to the page here — just return it.
// Task 3 will handle placing it in the right column.

console.log("----------Task 2----------");
function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");

  const p = document.createElement("p");
  p.classList.add("task-title");
  p.textContent = task.title;

  const div = document.createElement("div");
  div.classList.add("task-meta");

  const prioritySpan = document.createElement("span");
  const span2 = document.createElement("span");
  prioritySpan.textContent = task.priority.toUpperCase();
  prioritySpan.classList.add("priority-" + task.priority);
  span2.textContent = "👤 " + task.assignee + " ";
  
  li.appendChild(p);
  li.appendChild(div);
  li.appendChild(span2);
  li.appendChild(prioritySpan);

  if(task.status === "done"){
    li.classList.add("completed");
  }

  li.dataset.id = task.id
  
  return li;
}

// ----------------------------------------------------------
// TASK 3 — renderBoard
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList (array)
//
// Select the three task list elements:
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// For each task:
//   - Call createTaskCard(task) to get a card element
//   - Use an if/else if/else to append it to the right list:
//       status === "todo"       → append to todoList
//       status === "inprogress" → append to inprogressList
//       status === "done"       → append to doneList
//
// Call renderBoard(tasks) at the bottom.

console.log("----------Task 3----------");
function renderBoard(taskList) {
  const listTodo = document.querySelector("#list-todo");
  const listInprogress = document.querySelector("#list-inprogress");
  const listDone = document.querySelector("#list-done");

  taskList.forEach(task => {
    const card = createTaskCard(task);
    if(task.status === "todo"){
      listTodo.append(card);
    } else if(task.status === "inprogress"){
      listInprogress.append(card);
    } else if(task.status === "done"){
      listDone.append(card);
    }
  });
}

// ----------------------------------------------------------
// TASK 4 — updateCounts
// ----------------------------------------------------------
// Declare a function called updateCounts.
// Parameter: taskList
//
// Use filter to get completedTasks (status === "done").
// Use filter to get pendingTasks (status !== "done").
//
// Select #completed-count and set textContent:
//   "✅ " + completedTasks.length + " done"
//
// Select #pending-count and set textContent:
//   "⏳ " + pendingTasks.length + " pending"
//
// Call updateCounts(tasks) at the bottom.

console.log("----------Task 4----------");
function updateCounts(taskList) {
  const completedTasks = taskList.filter(function(task){
    return task.status === "done";
  });
  const pendingTasks = taskList.filter(function(task){
    return task.status !== "done";
  });

  const completedCount = document.querySelector("#completed-count");
  completedCount.textContent = "✅ " + completedTasks.length + " done";

  const pendingCount = document.querySelector("#pending-count");
  pendingCount.textContent = "⏳ " + pendingTasks.length + " pending";
}

// ----------------------------------------------------------
// TASK 5 — addRemoveButtons
// ----------------------------------------------------------
// Declare a function called addRemoveButtons.
//
// Select all elements with class "task-card"
// using querySelectorAll.
//
// Loop through them using forEach.
// For each card:
//   1. Create a <button> — add class "remove-btn"
//   2. Set its textContent to "✕"
//   3. Append it to the card
//
// Note: we will wire up the click behavior in Event Listeners.
// For now just build and attach the buttons so they appear.

console.log("----------Task 5----------");
function addRemoveButtons() {
  const taskCard = document.querySelectorAll(".task-card");
  taskCard.forEach(task =>{
    const btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.textContent = "X";
    task.append(btn);
  });
}

// ----------------------------------------------------------
// TASK 6 — highlightHighPriority
// ----------------------------------------------------------
// Declare a function called highlightHighPriority.
//
// Select all elements with class "priority-high"
// using querySelectorAll.
//
// Loop through them using forEach.
// For each element, use element.style to set:
//   fontWeight: "800"
//
// This makes high-priority labels appear bolder.

console.log("----------Task 6----------");
function highlightHighPriority() {
  const priorityHigh = document.querySelectorAll(".priority-high");
  priorityHigh.forEach(high => {
    high.style.fontWeight = "800";
  });
}

// ----------------------------------------------------------
// TASK 7 — addNewTask  (createElement full workflow)
// ----------------------------------------------------------
// Declare a function called addNewTask.
// Parameters: title, assignee, priority = "medium", status = "todo"
//
// Inside:
//   1. Create a new task object:
//      { id: Date.now(), title, assignee, priority, status }
//   2. Push the new task into the tasks array
//   3. Call createTaskCard(newTask) to build the card element
//   4. Append the card to the correct list based on status
//   5. Call updateCounts(tasks) to refresh the header stats
//
// Call addNewTask("Write unit tests", "Carlos", "high") at the bottom.
// Watch a new card appear in the To Do column.

console.log("----------Task 7----------");
function addNewTask(title, assignee, priority = "medium", status = "todo") {
  const newTask = {id: Date.now(), title, assignee, priority, status};
  tasks.push(newTask);
  const newCard = createTaskCard(newTask);
  const listTodo = document.querySelector("#list-todo");
  listTodo.append(newCard);
  updateCounts(tasks);
}

// ----------------------------------------------------------
// TASK 8 — Connect the dots: renderAll
// ----------------------------------------------------------
// Declare a function called renderAll.
// No parameters.
//
// Inside, call in order:
//   renderHeader(tasks)
//   renderBoard(tasks)
//   updateCounts(tasks)
//   addRemoveButtons()
//   highlightHighPriority()
//
// Call renderAll() at the bottom instead of calling
// each function individually.

console.log("----------Task 8----------");
function renderAll() {
  renderHeader(tasks);
  renderBoard(tasks);
  updateCounts(tasks);
  addRemoveButtons();
  highlightHighPriority();
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — markComplete
// ----------------------------------------------------------
// Declare a function called markComplete.
// Parameter: taskId (number)
//
// Inside:
//   1. Use find to locate the task with matching id in tasks array
//   2. If found, set task.status = "done"
//   3. Select the task card element using:
//      document.querySelector("[data-id='" + taskId + "']")
//      (This uses a data attribute — add data-id to your createTaskCard
//       function: li.dataset.id = task.id)
//   4. If the card element exists:
//      - Add class "completed" using classList
//      - Move it to #list-done using appendChild
//   5. Call updateCounts(tasks) to refresh the stats
//
// Go back to createTaskCard and add: li.dataset.id = task.id
// Then call markComplete(1) to mark task 1 as done.
//
// Write a comment: what is dataset used for?

console.log("----------STRETCH GOAL----------");
function markComplete(number){
  const findId = tasks.find(function(task){
    return task.id === number ? task.status = "done" : "";
  });
  const taskCard = document.querySelector("[data-id='" + number + "']");
  if(taskCard){
    taskCard.classList.add("completed");
    const listDone = document.querySelector("#list-done");
    listDone.append(taskCard);
  }
  updateCounts(tasks);
}

// ============================================================
// CALL YOUR FUNCTIONS HERE
// ============================================================
renderAll();
addNewTask("Write unit tests", "Carlos", "high");
markComplete(1);
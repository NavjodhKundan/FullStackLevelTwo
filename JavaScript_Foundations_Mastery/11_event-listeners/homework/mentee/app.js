// ============================================================
// 🏠  EVENT LISTENERS — HOMEWORK
// ============================================================
// Mini Project: Interactive Task Board
//
// The Task Board from DOM Manipulation is back — now make it
// fully interactive with event listeners.
//
// Every interaction must use addEventListener.
// All DOM operations must be inside named functions.
// ============================================================

// ============================================================
// THE DATA
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
    title: "Write API docs",
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
    title: "Add dark mode",
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

// ----------------------------------------------------------
// TASK 1 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Build and return a complete <li> element:
//   1. Create <li> — class "task-card", dataset.id = task.id,
//      dataset.priority = task.priority
//   2. Create <p class="task-title"> — textContent: task.title
//   3. Create <div class="task-meta">:
//      - <span> with priority class + text: task.priority.toUpperCase()
//      - <span>: "👤 " + task.assignee
//   4. Create <div class="card-actions">:
//      - <button class="complete-btn"> textContent: "✅ Complete"
//      - <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//   7. Return the <li>

console.log("----------Task 1----------");
function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("taks-card");
  dataset.id = task.id;
  dataset.priority = task.priority;

  const p = document.createElement("p");
  p.classList.add("task-title");
  p.textContent = task.title;

  const div = document.createElement("div");
  div.classList.add("task-meta");
  const prioritySpan = document.createElement("span");
  prioritySpan.classList.add("priority-"+task.priority);
  prioritySpan.textContent = task.priority.toUpperCase();
  const assigneeSpan = document.createElement("span");
  assigneeSpan.textContent = "👤 " + task.assignee;

  const cardActionDiv = document.createElement("div");
  cardActionDiv.classList.add("card-actions");
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.textContent = "✅ Complete";
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.textContent = "🗑️ Remove";

  if(task.status === "done"){
    li.classList.add("completed");
  }
  
  li.appendChild(p);
  li.appendChild(div);
  li.appendChild(cardActionDiv);

  return li;
}

// ----------------------------------------------------------
// TASK 2 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList
//
// Clear all three lists first (set innerHTML = ""):
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// Call createTaskCard(task) for each.
// Append to the correct list based on task.status.
//
// After appending call updateCounts(taskList).
//
// ---
// Declare a function called updateCounts.
// Parameter: taskList
//
// Update all six count displays:
//   #task-count       → taskList.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo tasks count
//   #count-inprogress → inprogress tasks count
//   #count-done       → done tasks count

console.log("----------Task 2----------");
function updateCounts(taskList) {
  const todoList = document.querySelectorAll("#list-todo");
  const inprogressList = document.querySelectorAll("#list-inprogress");
  const doneList = document.querySelectorAll("#list-done");

  const taskCount = document.getElementById("#task-count");
  taskCount.textContent = taskList.length + " tasks";

  const completedCount = document.getElementById("#completed-count");
  completedCount.textContent = "✅ " + doneList.length + " done";

  const pendingCount = document.getElementById("#pending-count");
  pendingCount.textContent = "⏳ " + inprogressList.length + todoList.length + " pending"

  const todoCount = document.getElementById("#count-todo");
  todoCount.textContent = todoList.length;

  const inprogressCount = document.getElementById("#count-inprogress");
  inprogressCount.textContent = inprogressList.length;

  const doneCount = document.getElementById("#count-done");
  doneCount.textContent = doneList.length;
}

function renderBoard(taskList) {
  const todoList = document.querySelectorAll("#list-todo");
  todoList.innerHHTML = "";
  const inprogressList = document.querySelectorAll("#list-inprogress");
  inprogressList.innerHHTML = "";
  const doneList = document.querySelectorAll("#list-done");
  doneList.innerHHTML = "";

  taskList.forEach(task => {
    const card = createTaskCard(task);
    if(task.status === "todo"){
      todoList.append(card);
    } else if (task.status === "inprogress"){
      inprogressList.append(card);
    } else if (task.status === "done"){
      doneList.append(card);
    }
  });

  updateCounts(taskList);
}

// ----------------------------------------------------------
// TASK 3 — handleAddTask (click event on the Add button)
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read values from:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → log "Title is required" and return early
//   3. Create a new task object:
//      { id: Date.now(), title, assignee: assignee || "Unassigned",
//        priority, status }
//   4. Push the new task to the tasks array
//   5. Re-render: call renderBoard(tasks)
//   6. Clear the title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask);

console.log("----------Task 3----------");
function handleAddTask() {
  const taskTitleInput = document.querySelector("#task-title-input").value.trim();
  const taskAssigneeInput = document.querySelector("#task-assignee-input").value.trim();
  const taskPriorityInput = document.querySelector("#task-priority-input").value;
  const taskStatusInput = document.querySelector("#task-status-input").value;

  if(taskTitleInput === ""){
    console.log("Title is required");
    return;
  }

  const newTask = {id: Date.now(), tirle: taskTitleInput, assignee: taskAssigneeInput || "Unassigned", 
    priority: taskPriorityInput, status: taskStatusInput};

  tasks.push(newTask);

  renderBoard(tasks);

  taskTitleInput.innerHHTML = "";
  taskAssigneeInput.innerHHTML = "";
}

// wire up here
document.getElementById("add-task-btn").addEventListener("click", handleAddTask);

// ----------------------------------------------------------
// TASK 4 — handleBoardClick (event delegation for complete + remove)
// ----------------------------------------------------------
// Instead of adding listeners to every button individually,
// use delegation on each column's task list.
//
// Declare a function called handleBoardClick.
// Parameter: event
//
// Inside:
//   - Get the clicked element: event.target
//   - Get the task card: target.closest(".task-card")
//     (.closest() walks UP the DOM tree to find the nearest matching ancestor)
//   - If no card found → return early
//   - Get the task id: parseInt(card.dataset.id)
//   - Find the task in the tasks array using find
//
//   IF target.classList.contains("complete-btn"):
//     - Set task.status = "done"
//     - Add class "completed" to card
//     - Move card to #list-done using appendChild
//     - Call updateCounts(tasks)
//
//   IF target.classList.contains("remove-btn"):
//     - Remove the task from tasks array:
//       const index = tasks.findIndex(t => t.id === taskId)
//       tasks.splice(index, 1)
//     - Remove the card from the DOM: card.remove()
//     - Call updateCounts(tasks)
//
// Wire ONE listener to document.getElementById("board"):
//   Wait — the <main> has class "board" not id "board".
//   Use document.querySelector(".board")
//     .addEventListener("click", handleBoardClick);
//
// Write a comment: why use .closest() instead of event.target directly?

console.log("----------Task 4----------");
function handleBoardClick(event) {
  const target = event.target;
  const taskCard = target.closest(".task-card");
  if(!taskCard){
    return;
  }
  const taskId = parseInt(taskCard.dataset.id);
  const found = tasks.find(task => {
    return task.id === taskId;
  });

  if(target.classList.contains("complete-btn")){
    found.status = "done";
    found.classList.add("completed");
    const doneList = document.querySelector("#list-done");
    doneList.appendChild(taskCard);
    updateCounts(tasks);
  } else if (target.classList.contains("remove-btn")){
    const index = tasks.findIndex(t => t.id === taskId);
    tasks.splice(index, 1);
    taskCard.remove();
    updateCounts(tasks);
  }
}

// wire up here
document.querySelector(".board").addEventListener("click", handleBoardClick);
// user can click on any elemnt inside the task card and closest() will find
// the nearest parent with task-card class.

// ----------------------------------------------------------
// TASK 5 — handleFilterClick (filter buttons)
// ----------------------------------------------------------
// The header has four filter buttons with data-filter attributes:
//   data-filter="all", "high", "medium", "low"
//
// Declare a function called handleFilterClick.
// Parameter: event
//
// Inside:
//   - Get the filter value: event.target.dataset.filter
//   - If no filter value → return (clicked something that's not a button)
//
//   - Remove "active" class from ALL .filter-btn elements
//     (use querySelectorAll + forEach)
//   - Add "active" class to event.target
//
//   - Select ALL .task-card elements
//   - For each card:
//       IF filter === "all" → remove class "hidden"
//       ELSE IF card.dataset.priority === filter → remove "hidden"
//       ELSE → add "hidden"
//
// Use delegation on the .header-right div:
//   document.querySelector(".header-right")
//     .addEventListener("click", handleFilterClick);
//
// Write a comment: why use delegation here instead of
// individual listeners on each button?

console.log("----------Task 5----------");
function handleFilterClick(event) {
  const filterValue = event.target.dataset.filter;
  if(!filterValue){
    console.log("clicked something that's not a button");
  }

  
}

// wire up here

// ----------------------------------------------------------
// TASK 6 — handleKeyDown (keyboard shortcuts)
// ----------------------------------------------------------
// Declare a function called handleKeyDown.
// Parameter: event
//
// Inside:
//   IF event.key === "Escape":
//     - Clear both input fields (#task-title-input, #task-assignee-input)
//     - Log: "Inputs cleared"
//
//   IF event.key === "Enter" AND event.target.id === "task-title-input":
//     - Call handleAddTask()
//     (lets users press Enter in the title field to add a task)
//
// Wire it up to document.

function handleKeyDown(event) {
  // your code here
}

// wire up here

// ----------------------------------------------------------
// TASK 7 — Connect the dots: init
// ----------------------------------------------------------
// Declare a function called init.
// Inside: call renderBoard(tasks).
//
// Call init() at the bottom.

function init() {
  // your code here
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — live search
// ----------------------------------------------------------
// Add a search input somewhere on the page (you can add a
// plain <input id="search-input"> anywhere in the HTML above
// the board, inside .add-task-bar).
//
// Declare a function called handleSearch.
// Parameter: event
//
// Inside:
//   - Get the search query: event.target.value.toLowerCase().trim()
//   - Select all .task-card elements
//   - For each card:
//       Get the title text: card.querySelector(".task-title").textContent.toLowerCase()
//       IF the title includes the query → remove class "hidden"
//       ELSE → add class "hidden"
//
// Wire it up:
//   document.getElementById("search-input")
//     .addEventListener("input", handleSearch);
//
// Write a comment: why use "input" and not "change" for live search?

// ============================================================
// WIRE UP ALL LISTENERS (above init)
// ============================================================

// ============================================================
// START
// ============================================================
init();

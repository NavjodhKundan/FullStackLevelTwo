// ============================================================
// 🏠  localStorage — HOMEWORK
// ============================================================
// Mini Project: Persistent Task Board
//
// The Task Board from Event Listeners — now with persistence.
// Every change is saved to localStorage automatically.
// Refreshing the page restores exactly where the user left off.
//
// STORAGE KEY: "taskBoardData"
// Store the full tasks array under this key.
// ============================================================

// ============================================================
// DEFAULT TASKS — used only when nothing is saved yet
// ============================================================
const defaultTasks = [
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
];

// This is your working tasks array — start it empty.
// loadTasks() will fill it from localStorage (or from defaultTasks).
let tasks = [];

// ----------------------------------------------------------
// TASK 1 — saveTasks
// ----------------------------------------------------------
// Declare a function called saveTasks.
// No parameters.
//
// Inside:
//   1. Save tasks to localStorage:
//      localStorage.setItem("taskBoardData", JSON.stringify(tasks))
//
//   2. Flash the save indicator:
//      Select #save-indicator
//      Add class "visible"
//      After 1500ms, remove class "visible":
//        setTimeout(function() {
//          saveIndicator.classList.remove("visible");
//        }, 1500);
//
// This function will be called after EVERY change.

function saveTasks() {
  //stroing tasks data to taskBoardData in localstorage
  localStorage.setItem("taskBoardData", JSON.stringify(tasks));

  //getting data from html
  const saveIndicator = document.querySelector("#save-indicator");
  saveIndicator.classList.add("visible");// adding class
  //removing class after 1500 milli seconds
  setTimeout(function(){
    saveIndicator.classList.remove("visible");
  }, 1500);
}

// ----------------------------------------------------------
// TASK 2 — loadTasks
// ----------------------------------------------------------
// Declare a function called loadTasks.
// No parameters. Returns nothing — populates the tasks array.
//
// Inside:
//   1. const raw = localStorage.getItem("taskBoardData")
//
//   2. IF raw is null (nothing saved yet):
//      Set tasks = [...defaultTasks]  (copy the defaults)
//      Call saveTasks() to save them immediately
//      Return early
//
//   3. ELSE:
//      Set tasks = JSON.parse(raw)
//
// ⚠️  Always check for null before parsing.

function loadTasks() {
  //getting data from local storage
  const raw = localStorage.getItem("taskBoardData");

  //checking if raw is null
  if(!raw){
    tasks = [...defaultTasks];//adding data to tasks
    saveTasks();//saving data to local storage
    return;
  } else {
    tasks = JSON.parse(raw);//converting data from strings to objects
  }
}

// ----------------------------------------------------------
// TASK 3 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Carried from Event Listeners — same structure.
// Parameter: task (object)
//
// Build and return a <li> with:
//   - class "task-card"
//   - dataset.id = task.id
//   - dataset.priority = task.priority
//   - A title <p class="task-title">
//   - A meta <div class="task-meta"> with priority and assignee spans
//   - An actions <div class="card-actions"> with Complete and Remove buttons
//   - class "completed" if task.status === "done"
//
// Return the <li> — do NOT append it here.

function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");
  li.dataset.id = task.id;
  li.dataset.priority = task.priority;

  const title = document.createElement("p");
  title.classList.add("task-title");
  title.textContent = task.title;

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

  li.appendChild(title);
  div.appendChild(prioritySpan);
  div.appendChild(assigneeSpan);
  li.appendChild(div);
  li.appendChild(cardActionDiv);
  cardActionDiv.appendChild(completeButton);
  cardActionDiv.appendChild(removeButton);
  
  if(task.status === "done"){
    li.classList.add("completed");
  }

  return li;
}

// ----------------------------------------------------------
// TASK 4 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// No parameters — uses the global tasks array.
//
// Clear all three lists (innerHTML = "").
// Loop through tasks, call createTaskCard, append to correct list.
// Call updateCounts() after.
//
// ---
// Declare a function called updateCounts.
// No parameters.
//
// Update all six count elements using the tasks array.
// (Same as Event Listeners homework)

function updateCounts() {
  let todoList = 0;
  let inprogressList = 0;
  let doneList = 0;

  for(let i=0;i<tasks.length;i++){
    if(tasks[i].status === "todo"){
      todoList++;
    } else if (tasks[i].status === "inprogress"){
      inprogressList++;
    } else if (tasks[i].status === "done"){
      doneList++;
    }
  }

  const taskCount = document.querySelector("#task-count");
  taskCount.textContent = tasks.length + " tasks";

  const completedCount = document.querySelector("#completed-count");
  completedCount.textContent = "✅ " + doneList + " done";

  const pendingCount = document.querySelector("#pending-count");
  pendingCount.textContent = "⏳ " + parseInt(inprogressList + todoList) + " pending"

  const todoCount = document.querySelector("#count-todo");
  todoCount.textContent = todoList;

  const inprogressCount = document.querySelector("#count-inprogress");
  inprogressCount.textContent = inprogressList;

  const doneCount = document.querySelector("#count-done");
  doneCount.textContent = doneList;
}

function renderBoard() {
  const todoList = document.querySelector("#list-todo");
  todoList.innerHTML = "";
  const inprogressList = document.querySelector("#list-inprogress");
  inprogressList.innerHTML = "";
  const doneList = document.querySelector("#list-done");
  doneList.innerHTML = "";

  tasks.forEach(task => {
    const card = createTaskCard(task);
    if(task.status === "todo"){
      todoList.append(card);
    } else if (task.status === "inprogress"){
      inprogressList.append(card);
    } else if (task.status === "done"){
      doneList.append(card);
    }
  });

  updateCounts();
}

// ----------------------------------------------------------
// TASK 5 — handleAddTask
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read the four input values (title, assignee, priority, status)
//   2. If title is empty → return early
//   3. Create a new task object with id: Date.now()
//   4. Push to tasks array
//   5. Call saveTasks()     ← persist immediately
//   6. Call renderBoard()   ← update the view
//   7. Clear title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask)

function handleAddTask() {
  const taskTitleInput = document.querySelector("#task-title-input").value.trim();
  const taskAssigneeInput = document.querySelector("#task-assignee-input").value.trim();
  const taskPriorityInput = document.querySelector("#task-priority-input").value;
  const taskStatusInput = document.querySelector("#task-status-input").value;

  if(!taskTitleInput){
    return;
  }

  const newTask = {id: Date.now(), title: taskTitleInput, 
  assignee: taskAssigneeInput || "Unassigned", 
  priority: taskPriorityInput, status: taskStatusInput};

  tasks.push(newTask);
  saveTasks();
  renderBoard();

  document.querySelector("#task-title-input").value = "";
  document.querySelector("#task-assignee-input").value = "";
}

document
  .getElementById("add-task-btn")
  .addEventListener("click", handleAddTask);

// ----------------------------------------------------------
// TASK 6 — handleBoardClick (delegation for complete + remove)
// ----------------------------------------------------------
// Declare a function called handleBoardClick.
// Parameter: event
//
// Use event.target.closest(".task-card") to get the card.
// Guard: if no card → return.
//
// Get taskId: parseInt(card.dataset.id)
// Find the task in tasks using find.
//
// IF complete button clicked:
//   - Update task.status = "done" in the array
//   - Call saveTasks()
//   - Call renderBoard()
//
// IF remove button clicked:
//   - Remove from tasks: tasks.splice(tasks.findIndex(...), 1)
//   - Call saveTasks()
//   - Call renderBoard()
//
// Wire it up to document.querySelector(".board")

function handleBoardClick(event) {
  const targetCard = event.target;
  const taskCard = targetCard.closest(".task-card");
  if(!taskCard){
    return;
  }

  const taskId = parseInt(taskCard.dataset.id);
  const found = tasks.find(task => {
    return task.id === taskId;
  });

  if(targetCard.classList.contains("complete-btn")){
    found.status = "done";
    updateCounts();
    renderBoard();
  } else if (targetCard.classList.contains("remove-btn")){
    const index = tasks.findIndex(t => t.id === taskId);
    tasks.splice(index, 1);
    taskCard.remove();
    updateCounts();
    renderBoard();
  }
}

document.querySelector(".board").addEventListener("click", handleBoardClick);

// ----------------------------------------------------------
// TASK 7 — handleClearAll
// ----------------------------------------------------------
// Declare a function called handleClearAll.
//
// Inside:
//   1. Confirm the user wants to clear:
//      if (!confirm("Clear all tasks? This cannot be undone.")) return;
//   2. Clear localStorage: localStorage.removeItem("taskBoardData")
//   3. Reset tasks: tasks = [...defaultTasks]
//   4. Call saveTasks() to save the defaults
//   5. Call renderBoard()
//
// Wire it up:
//   document.getElementById("clear-btn")
//     .addEventListener("click", handleClearAll)

function handleClearAll() {
  if(!confirm("Clear all tasks? This cannot be undone.")){ return; }
  localStorage.removeItem("taskBoardData");
  tasks = [...defaultTasks];
  saveTasks();
  renderBoard();
}

document.getElementById("clear-btn").addEventListener("click", handleClearAll);

// ----------------------------------------------------------
// TASK 8 — init
// ----------------------------------------------------------
// Declare a function called init.
// Inside:
//   1. Call loadTasks()    ← loads from localStorage or defaults
//   2. Call renderBoard()  ← renders whatever loadTasks set up
//
// Call init() at the bottom.

function init() {
  loadTasks();
  renderBoard();
  const savedFilter = loadFilter();
  
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — persist filter preference
// ----------------------------------------------------------
// The board currently loses the active filter on refresh.
// Add persistence for the current filter setting.
//
// Declare a function called saveFilter.
// Parameter: filterValue (string)
// Saves: localStorage.setItem("taskFilter", filterValue)
//
// Declare a function called loadFilter.
// Returns the saved filter or "all" as default:
//   return localStorage.getItem("taskFilter") || "all"
//
// In your filter click handler:
//   - After applying the filter, call saveFilter(filterValue)
//
// In init():
//   - After renderBoard(), call:
//       const savedFilter = loadFilter()
//       Apply the saved filter (update active button + show/hide cards)
//
// Write a comment: what other UI state might be worth persisting?

function saveFilter(filterValue){
  localStorage.setItem("taskFilter", filterValue);
}

function loadFilter(){
  return localStorage.getItem("taskFilter" || "all");
}

function handleFilterClick(event) {
  const filterValue = event.target.dataset.filter;
  if(!filterValue){
    console.log("clicked something that's not a button");
  }

  const filterBtn = document.querySelectorAll(".filter-btn");
  filterBtn.forEach(btn => {
    btn.classList.remove("active");
    event.target.classList.add("active");
  })

  const taskCard = document.querySelectorAll(".task-card");
  taskCard.forEach(card => {
    if(filterValue === "all"){
      card.classList.remove("hidden");
    } else if (card.dataset.priority === filterValue){
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  })

  saveFilter(filterValue);
}

document.querySelector(".header-right").addEventListener("click", handleFilterClick);


// ============================================================
// START
// ============================================================
init();

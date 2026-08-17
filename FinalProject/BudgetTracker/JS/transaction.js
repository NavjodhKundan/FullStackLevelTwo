/*
 * This JS file is connected to transaction.html file.
 * Using this file user can add, remove or edit transactions.
 */

//function to get all transactions from local storage
function getAllTransactions(){
    const transactions = localStorage.getItem("transactions");
    if(!transactions){ return [] }
    return JSON.parse(transactions);
}

//function to add transaction and save to local storage
function addTransaction(event){
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    if(!amount || !category || !date){
        return;
    }

    let transactions = getAllTransactions();

    transactions.push({
        id: Date.now(),
        amount: amount,
        category: category,
        date: date,
        description: description
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));
}
document.getElementById("transactionForm").addEventListener("submit", addTransaction);

//function to add transaction to table and displaying to user.
function addToTable(transaction){
    const table = document.querySelector(".transactionTable");
    const tr = document.createElement("tr");

    const amountTd = document.createElement("td");
    amountTd.textContent = "$"+transaction.amount;

    const categoryTd = document.createElement("td");
    categoryTd.textContent = transaction.category;

    const dateTd = document.createElement("td");
    dateTd.textContent = transaction.date;

    const descriptionTd = document.createElement("td");
    descriptionTd.textContent = transaction.description;

    const editTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.dataset.id = transaction.id;
    editBtn.textContent = "edit";
    editBtn.classList.add("editBtn");
    editBtn.addEventListener("click", editTransaction);

    const deleteTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.dataset.id = transaction.id;
    deleteBtn.textContent = "❎";
    deleteBtn.classList.add("delBtn");
    deleteBtn.addEventListener("click", deleteTransaction);

    table.append(tr);
    tr.append(amountTd);
    tr.append(categoryTd);
    tr.append(dateTd);
    tr.append(descriptionTd);
    tr.append(editTd);
    editTd.append(editBtn);
    tr.append(deleteTd);
    deleteTd.append(deleteBtn);
}

//function to show all transaction to user
function showAllTranaction(){
    const transactions = getAllTransactions();
    if(transactions.length === 0){
        const table = document.querySelector(".transactionHistory");
        const noTransaction = document.createElement("p")
        noTransaction.textContent = "no transaction yet...";
        table.append(noTransaction);
    }
    transactions.forEach(transaction =>{
        addToTable(transaction);//calling function to display data to user
    });
}

//function to remove transaction data
function deleteTransaction(event){
    const id = Number(event.target.dataset.id);
    let transactions = getAllTransactions();
    const foundTransaction = transactions.find(t => {
        return id === t.id? t:false;
    })
    if(!foundTransaction){
        return;
    }
    transactions = transactions.filter(t =>{
        return t.id !== id;
    })
    localStorage.setItem("transactions", JSON.stringify(transactions));
    window.location.reload();
}

//function to edit a trasaction
//This function collects all data that user wants to edit and diaplays to user.
function editTransaction(event){
    const id = Number(event.target.dataset.id);
    let transactions = getAllTransactions();
    const foundTransaction = transactions.find(t =>{
        return t.id === id? t:false;
    });
    if(!foundTransaction){
        return;
    }
    document.getElementById("editId").value = foundTransaction.id;
    document.getElementById("editAmount").value = foundTransaction.amount;
    document.getElementById("editCategory").value = foundTransaction.category;
    document.getElementById("editDate").value = foundTransaction.date;
    document.getElementById("editDescription").value = foundTransaction.description;

    document.getElementById("editPopup").style.display = "flex";
}

//function to update the transaction data when user clicks update button.
function updateTransaction(){
    const id = Number(document.getElementById("editId").value);
    const amount = document.getElementById("editAmount").value;
    const category = document.getElementById("editCategory").value;
    const date = document.getElementById("editDate").value;
    const description = document.getElementById("editDescription").value;

    let transactions = getAllTransactions();

    transactions.forEach(t =>{
        if(t.id === id){
            t.amount = amount;
            t.category = category;
            t.date = date;
            t.description = description;
        }
    });
    localStorage.setItem("transactions", JSON.stringify(transactions));
    document.getElementById("editPopup").style.display = "none";
    window.location.reload;
}
document.getElementById("editForm").addEventListener("submit", updateTransaction);

//logic for close button if user wants to cancle the update
document.getElementById("closeBox").addEventListener("click", function(){
    document.getElementById("editPopup").style.display = "none";
})

//function to check if dark mode is on or off
function savedSettings(){
    const darkMode = localStorage.getItem("darkMode");
    if(darkMode === "on"){
        document.body.classList.add("bodyColor");
    }
}

// calling all necessary functions
showAllTranaction();
savedSettings();
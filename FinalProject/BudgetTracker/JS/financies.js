/*
 * This js file calcualtes monthly financial stats of the user.
 * It also creates a financial card which diaplays all user info. 
 */

//function to get all transactions
function getAllTransactions(){
    const transactions = localStorage.getItem("transactions");
    if(!transactions){ return [] }
    return JSON.parse(transactions);
}

//function to get data and displaying to user
function financialCard(){
    const income = localStorage.getItem("userIncome");
    const savings = localStorage.getItem("userSavings");
    const budget = localStorage.getItem("userBudget");
    const goal = localStorage.getItem("userGoal");

    const statCard = document.querySelector(".progressCard");

    const date = new Date();
    const currentDate = document.createElement("p");
    currentDate.classList.add("currentDate");
    currentDate.textContent = "Today: " + date.toLocaleDateString();

    const userIncome = document.createElement("p");
    userIncome.classList.add("userIncome");
    userIncome.textContent = "Your Monthly Income: $" + income;

    const userSavings = document.createElement("p");
    userSavings.classList.add("userSavings");
    userSavings.textContent = "Your Total Savings: $" + savings;

    const userBudget = document.createElement("p");
    userBudget.classList.add("userBudget");
    userBudget.textContent = "Your Monthly Budget: $" + budget;

    const userGoal = document.createElement("p");
    userGoal.classList.add("userGoal");
    userGoal.textContent = "Your Financial Goal: $" + goal;

    currentSpendings();
    const spendings = localStorage.getItem("spendings");
    const userSpending = document.createElement("p");
    userSpending.classList.add("userSpending");
    userSpending.textContent = "Your Current Month Spending: $" + spendings;

    statCard.append(currentDate);
    statCard.append(userIncome);
    statCard.append(userSavings);
    statCard.append(userBudget);
    statCard.append(userGoal);
    statCard.append(userSpending);
}

//function to calculate user's total monthly spending
function currentSpendings(){
    spendings = 0;
    const date = new Date();
    let month = date.getMonth() + 1;
    let transactions = getAllTransactions();
    if(month<10){
        month = 0+String(month);
    }
    transactions.forEach(t => {
        tMonth = t.date.slice(5,7);
        if(String(tMonth) === String(month)){
            spendings += parseFloat(t.amount);
        }
    });
    localStorage.setItem("spendings", spendings);
}

//creating chart that displays user's income, budget and savings
function incomeChart(){
    const income = localStorage.getItem("userIncome");
    const budget = localStorage.getItem("userBudget");
    const savings = income-budget;
    const canvas = document.getElementById("incomeChart");
    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: ["Monthly Income", "Monthly Budget", "Montly Savings"],
            datasets: [{
                data: [income, budget, savings]
            }]
        }
    })
}

//creating chart that displays current financial stats of a user
function currentStat(){
    const income = localStorage.getItem("userIncome");
    const budget = localStorage.getItem("userBudget");
    const transactions = getAllTransactions();
    const getData = getCategoryAmounts(transactions);
    let spendings = getData.grocery + getData.loan + getData.bill + getData.other;
    let savings = income-spendings;
    const canvas = document.getElementById("currentStat");
    new Chart(canvas, {
        type: "bar",
        data:{
            labels: ["Monthly Income", "Monthly Budget", "Monthly Savings", "Monthly Spendings"],
            datasets:[{
                data: [income, budget, savings, spendings]
            }] 
        },
        options:{
            plugins:{
                legend:{
                    display: false
                }
            }
        }
    })
}

//function to buld a chart that keeps track of users spendings
function spendingChart(){
    const transactions = getAllTransactions();
    const canvas = document.getElementById("spendingChart");
    const getData = getCategoryAmounts(transactions);
    console.log(getData);
    new Chart(canvas, {
        type: "pie",
        data:{
            labels: ["Grocery", "Bills", "Loans","Others"],
            datasets:[{
                data: [getData.grocery, getData.bill, getData.loan, getData.other]
            }]
        }
    })
}

//function to calcualte total amount of differetn categories
function getCategoryAmounts(transactions){
    let grocery = 0;
    let bill = 0;
    let loan = 0;
    let other = 0;
    transactions.forEach(t =>{
        if(t.category === "grocery"){
            grocery += parseFloat(t.amount);
        } else if (t.category === "bill"){
            bill += parseFloat(t.amount);
        } else if (t.category === "loan"){
            loan += parseFloat(t.amount);
        } else if(t.category === "other"){
            other += parseFloat(t.amount);
        }
    })
    return {grocery: grocery, bill: bill, loan: loan, other: other};
}

//creating a bar chart for user that tracks savings goals for user
function savingGoalChart(){
    const savingGoal = localStorage.getItem("userGoal");
    const currentSavings = localStorage.getItem("userSavings");
    const canvas = document.getElementById("savingGoalChart");
    new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["Current Savings", "Savings Goals"],
            datasets:[{
                data: [currentSavings, savingGoal]
            }]
        },
        options:{
            plugins:{
                legend:{
                    display: false
                }
            }
        }
    });
}

//function to check if dark mode is on or off
function savedSettings(){
    const darkMode = localStorage.getItem("darkMode");
    if(darkMode === "on"){
        document.body.classList.add("bodyColor");
    }
}

//calling all necessary functions
financialCard();
incomeChart();
currentStat();
spendingChart();
savingGoalChart();
savedSettings();
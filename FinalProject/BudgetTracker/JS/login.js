/*
 * This a simple login file. This takes data from user for getting things started.
 */

//function to get user data and storing it to local storage/
function setUserInfo(){
    const userName = document.getElementById("userName").value;
    const userIncome = document.getElementById("userIncome").value;
    const userBudget = document.getElementById("userBudget").value;
    const userGoal = document.getElementById("userGoal").value;
    const userSavings = document.getElementById("userSavings").value;

    if(!userName || !userIncome || !userBudget || !userGoal){
        return;
    }

    localStorage.setItem("userName", userName);
    localStorage.setItem("userIncome", userIncome);
    localStorage.setItem("userBudget", userBudget);
    localStorage.setItem("userGoal", userGoal);
    if(!userSavings){
        localStorage.setItem("userSavings", 0);
    } else {
        localStorage.setItem("userSavings", userSavings);
    }
    localStorage.setItem("spendings", 0);
    localStorage.setItem("darkMode", "off");
    
    //once user data is stored, user will be directed to dashboard page
    window.location.href = "dashboard.html";
}
document.getElementById("submitBtn").addEventListener("click", setUserInfo);
/*
 * This JS file is connected to settings.html file. 
 * Using this file user can update their name, income, budget and financial goal.
 * User can also change to dark mode and send a feedback using contack form.
 */

//function to get all user info stored in localstorage
function getUserInfo(){
    const name = localStorage.getItem("userName");
    const income = localStorage.getItem("userIncome");
    const budget = localStorage.getItem("userBudget");
    const goal = localStorage.getItem("userGoal");
    const savings = localStorage.getItem("userSavings");

    if(!name || !income || !budget || !goal || !savings){
        return;
    }

    return {name: name, income: income, budget: budget, goal: goal, savings: savings};
}

//displaying all user info to user
function setUserInfo(){
    const data = getUserInfo();
    document.getElementById("name").value = data.name;
    document.getElementById("income").value = data.income;
    document.getElementById("budget").value = data.budget;
    document.getElementById("goal").value = data.goal;
    document.getElementById("savings").value = data.savings;
}

//updating userinfo when user clicks update button
function updateUserInfo(){
    const name = document.getElementById("name").value;
    const income = document.getElementById("income").value;
    const budget = document.getElementById("budget").value;
    const goal = document.getElementById("goal").value;
    const savings = document.getElementById("savings").value;
    if(!name || !income || !budget || !goal || !savings){
        return;
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userIncome", income);
    localStorage.setItem("userBudget", budget);
    localStorage.setItem("userGoal", goal);
    localStorage.setItem("userSavings", savings);
}
document.getElementById("updateProfile").addEventListener("submit", updateUserInfo);

function enable(){
    document.getElementById("darkMode").textContent = "Dark Mode OFF";
    document.body.classList.add("bodyColor");
    localStorage.setItem("darkMode", "on");
}
function diable(){
    document.getElementById("darkMode").textContent = "Dark Mode ON";
    document.body.classList.remove("bodyColor");
    localStorage.setItem("darkMode", "off");
}
document.getElementById("darkMode").addEventListener("click", function(){
    if(document.body.classList.contains("bodyColor")){
        diable();
    }else{
        enable();
    }
});

function savedSettings(){
    const darkMode = localStorage.getItem("darkMode");
    if(darkMode === "on"){
        enable();
    }
}

//function to store user feed back to local storage
function contactForm(){
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const email = document.getElementById("userEmail").value;
    const message = document.getElementById("message").value;
    if(!fName || !lName || !email || !message){
        return;
    }
    const contactData = {
        firstName: fName,
        lastName: lName,
        email: email,
        message: message
    }
    localStorage.setItem("contactFormData", JSON.stringify(contactData));
}
document.getElementById("contactForm").addEventListener("submit", contactForm);

//calling necessary functions
setUserInfo();
savedSettings();
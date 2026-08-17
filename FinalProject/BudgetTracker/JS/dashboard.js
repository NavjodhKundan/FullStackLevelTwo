/*
 * This JS file is connected to dashboard.html file.
 * It displays user name wiyth welcome message, a finincial advise
 * and goal progress tracker chart.
 */

//this function displays user name
function welcomeMessage(){
    const userName = localStorage.getItem("userName");
    if(!userName){
        return;
    }
    document.querySelector(".name").textContent = userName;//setting user name
}

//usning api call to get an advice from an AI on how to save more money
async function getAdvice(){
    const tipText = document.getElementById("tipText");
    try{
        const response = await fetch("https://api.adviceslip.com/advice/search/financial");
        if(!response.ok){
            throw new Error("Connection lost...");
        }
        const data = await response.json();
        tipText.textContent = data.slips[0].advice;
    } catch (error){
        tipText.textContent = "Error:" + error;
    }
}

//displaying user on how they are doing on there goal progress
function goalProgress(){
    //getting data from local storage
    const savingGoal = localStorage.getItem("userGoal");
    const currentSavings = localStorage.getItem("userSavings");
    //creating a bar graph for an easy demonastration for user
    const canvas = document.getElementById("goalProgress");
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
    let remaining = savingGoal-currentSavings;
    document.getElementById("balance").textContent = "$"+remaining;
}

//function to check if dark mode is on or off
function savedSettings(){
    const darkMode = localStorage.getItem("darkMode");
    if(darkMode === "on"){
        document.body.classList.add("bodyColor");
    }
}

//callling all necessary functions
welcomeMessage();
getAdvice();
goalProgress();
savedSettings();
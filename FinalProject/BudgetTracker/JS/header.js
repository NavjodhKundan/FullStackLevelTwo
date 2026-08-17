//function to get user name from storage, saving it and displayin username.
function getUserName(){
    const userName = localStorage.getItem("userName");
    if(!userName){ 
        return;
    }
    const setUserName = document.querySelector(".UserName");
    setUserName.textContent = userName;
    return userName;
}

// calling all the necessary functions
getUserName();
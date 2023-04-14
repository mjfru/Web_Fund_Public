var userName = document.getElementById("user_name")
var profilePic = document.querySelector(".avatar-m")


function editName(element){
    if (userName.innerText == "Matt Frutchey") {
        userName.innerText = "John Doe";
        profilePic.src = "avatars/user-circle.png"
    } else {
        userName.innerText = "Matt Frutchey"
        profilePic.src = "avatars/profileimg.jpg"
    }
}

var loggedIn = document.querySelector(".btn")

function logStatus(element){
    if (loggedIn.innerText == "Sign Out"){
        loggedIn.innerText = "Log In"
    } else {
        loggedIn.innerHTML = "Sign Out"
    }
}

var request1 = document.getElementById("toddRequest")
var request2 = document.getElementById("philRequest")
var requestCounter = 2
var requests = document.querySelector(".badge")

function deleteConnection1(element){
    request1.remove(element);
    requestCounter--;
    requests.innerText = requestCounter;
}

function deleteConnection2(element){
    request2.remove(element);
    requestCounter--;
    requests.innerText = requestCounter;
}

/* Can't figure out how to get this to delete the desire row without having two functions... */

/* Scrapped bonus for increasing the connections counter if the + was selected.
var connectionCounter = 500
var connections = document.getElementById("connectionsMade")

function addConnection(element){
    connectionCounter++
    connections.innerText = connectionCounter;
} 
*/
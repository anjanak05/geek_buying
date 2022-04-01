document.querySelector("form").addEventListener("submit", signInFunc)

var loginData = JSON.parse(localStorage.getItem("signUpData")) || [];

function signInFunc() {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    for (var i = 0; i < loginData.length; i++) {
        if (loginData[i].email == email && loginData[i].password == password) {
            alert("Login Successful");
            window.location.href ="index.html"
            break;
        } else {
            alert("Login Failed")
        }
    }
}





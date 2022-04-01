document.querySelector("#form").addEventListener("submit", signUpFunc)

var signUpArr = JSON.parse(localStorage.getItem("signUpData"))||[];
console.log(signUpArr)
function signUpFunc(){
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var otpEmail = document.querySelector("#otpEmail").value;

    var signInObj={
        name:name,
        email:email,
        password:password,
        otpEmail:otpEmail
    }
    signUpArr.push(signInObj)
    document.querySelector("#name").value="";
    document.querySelector("#email").value="";
    document.querySelector("#password").value="";
    document.querySelector("#otpEmail").value="";
    alert("Resgistration Done")
   
localStorage.setItem("signUpData", JSON.stringify(signUpArr))

}
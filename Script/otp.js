
document.querySelector("form").addEventListener("submit", otpCheck)
function otpCheck(){
    event.preventDefault();
    var otp =  document.querySelector("#otp").value;
    if(otp==="1234"){
        alert("payment successful")
        window.location.href="index.html"
    }else{
        alert("payment declined")
    }
    }

document.querySelector("#form").addEventListener("submit", paymntPagebtn)

function paymntPagebtn() {
event.preventDefault();
    var cardNum = document.querySelector("#cardNum").value;
    var cardName = document.querySelector("#cardName").value;
    var cardMnthYr = document.querySelector("#cardMnthYr").value;
    var cardCvv = document.querySelector("#cardCvv").value;

    if (cardNum === "123456789" && cardMnthYr === "052027" && cardCvv === "677" && cardName === "anjana") {
        alert("OTP sen to your registered mobile number")
        window.location.href = "otp.html";

    } else {
        alert("wrong credentials")
    }

}
function paymentPage(){
    window.location.href="paymentPage.html"
}

document.querySelector("form").addEventListener("submit", submitfunc)

function submitfunc(){
    event.preventDefault();
    alert("Details Saved")
}
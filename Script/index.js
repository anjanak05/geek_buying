var firstBox = JSON.parse(localStorage.getItem("firstBoxData"))
firstBox.map(function (elem, inex) {

    var firstDiv = document.createElement("div");

    var saleName = document.createElement("div");
    saleName.innerText = elem.sale_name;

    var firstBoxImage = document.createElement("img");
    firstBoxImage.setAttribute("src", elem.firstBox_img_url)

    firstDiv.append(saleName, firstBoxImage)

    document.querySelector(".firstBox").append(firstDiv)
})

var secondBox = JSON.parse(localStorage.getItem("secondBoxData"))
secondBox.map(function (elem, inex) {

    var secondDiv = document.createElement("div");

    var secondBoxImage = document.createElement("img");
    secondBoxImage.setAttribute("src", elem.secondBox_img_url)

    var secondBoxPrice = document.createElement("P");
    secondBoxPrice.innerText = "₹" + elem.price;
    secondBoxPrice.setAttribute("class", "firstPara")


    var secondBoxSOffPrice = document.createElement("P");
    secondBoxSOffPrice.style.color = "grey"
    secondBoxSOffPrice.innerText = "₹" + elem.strikedoffPrice;
    secondBoxSOffPrice.style.textDecoration = "Line-Through"

    var secondBoxOffer = document.createElement("P");
    secondBoxOffer.innerText = elem.offPercentage;

    secondDiv.append(secondBoxImage, secondBoxPrice, secondBoxSOffPrice, secondBoxOffer)

    document.querySelector(".secondBox1").append(secondDiv)
})


var thirdBox = JSON.parse(localStorage.getItem("thirdBoxData"))
thirdBox.map(function (elem, inex) {

    var thirdDiv = document.createElement("div");

    var proName = document.createElement("p");
    proName.innerText = elem.pro_name;

    var thirdDivImage = document.createElement("img");
    thirdDivImage.setAttribute("src", elem.thirdBox_img_url)

    var detailsName = document.createElement("p");
    detailsName.innerText = elem.details;

    thirdDiv.append(proName, thirdDivImage, detailsName)

    document.querySelector(".thirdBox").append(thirdDiv)
})

var fourthBox = JSON.parse(localStorage.getItem("fourthBoxData"))
fourthBox.map(function (elem, inex) {

    var fourthDiv = document.createElement("div");

    var fourthBoxImage = document.createElement("img");
    fourthBoxImage.setAttribute("src", elem.fourthBox_img_url)

    var fourthBoxDetails = document.createElement("P");
    fourthBoxDetails.innerText = elem.details1;

    var fourthBoxPrice = document.createElement("P");
    fourthBoxPrice.innerText = "₹" + elem.price;
    fourthBoxPrice.setAttribute("class", "firstPara")


    var fourthBoxSOffPrice = document.createElement("P");
    fourthBoxSOffPrice.style.color = "grey"
    if (elem.strikedoffPrice === "") {
        fourthBoxSOffPrice.innerText = "";
    } else {
        fourthBoxSOffPrice.innerText = "₹" + elem.strikedoffPrice;
    }
    fourthBoxSOffPrice.style.textDecoration = "Line-Through"


    fourthDiv.append(fourthBoxImage, fourthBoxDetails, fourthBoxPrice, fourthBoxSOffPrice)

    document.querySelector(".fourthBox1").append(fourthDiv)
})


var fiveBox = JSON.parse(localStorage.getItem("fiveBoxData"))
fiveBox.map(function (elem, inex) {

    var fiveDiv = document.createElement("div");

    var fiveBoxImage = document.createElement("img");
    fiveBoxImage.setAttribute("src", elem.fiveBox_img_url)

    var fiveBoxDetails = document.createElement("P");
    fiveBoxDetails.innerText = elem.details1;

    var fiveBoxPrice = document.createElement("P");
    fiveBoxPrice.innerText = "₹" + elem.price;
    fiveBoxPrice.setAttribute("class", "firstPara")


    var fiveBoxSOffPrice = document.createElement("P");
    fiveBoxSOffPrice.style.color = "grey"

    if (elem.strikedoffPrice === "") {
        fiveBoxSOffPrice.innerText = "";
    } else {
        fiveBoxSOffPrice.innerText = "₹" + elem.strikedoffPrice;
    }
    fiveBoxSOffPrice.style.textDecoration = "Line-Through"


    fiveDiv.append(fiveBoxImage, fiveBoxDetails, fiveBoxPrice, fiveBoxSOffPrice)

    document.querySelector(".fiveBox1").append(fiveDiv)
})


var sixthBox = JSON.parse(localStorage.getItem("sixthBoxData"))

sixthBox.map(function (elem, index) {

    var sixDiv = document.createElement("div");

    var sixBoxDetail = document.createElement("P");
    sixBoxDetail.innerText = elem.sixthDetails;

    var sixBoxVideo = document.createElement("img");
    sixBoxVideo.setAttribute("src", elem.video_url)

    sixDiv.append(sixBoxDetail, sixBoxVideo)

    document.querySelector(".sixthBox1").append(sixDiv)
})

var sixthBox1 = JSON.parse(localStorage.getItem("sixthBoxData1"))

sixthBox1.map(function (elem, index) {

    var sixDiv1 = document.createElement("div");

    var sixBoxImage = document.createElement("img");
    sixBoxImage.setAttribute("src", elem.image_url)

    sixDiv1.append(sixBoxImage)

    document.querySelector(".sixthBox2").append(sixDiv1)
})

var seventhBox11 = JSON.parse(localStorage.getItem("seventhBox11Data"))
seventhBox11.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox11").append(seventhDiv1)

})

var seventhBox22 = JSON.parse(localStorage.getItem("seventhBox22Data"))
seventhBox22.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox22").append(seventhDiv1)

})

var seventhBox22 = JSON.parse(localStorage.getItem("seventhBox22Data"))
seventhBox22.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox33").append(seventhDiv1)

})

var seventhBox22 = JSON.parse(localStorage.getItem("seventhBox22Data"))
seventhBox22.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox44").append(seventhDiv1)

})

var seventhBox22 = JSON.parse(localStorage.getItem("seventhBox22Data"))
seventhBox22.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox55").append(seventhDiv1)

})

var seventhBox22 = JSON.parse(localStorage.getItem("seventhBox22Data"))
seventhBox22.map(function (elem, index) {
    var seventhDiv1 = document.createElement("div");

    var sevenBoxImage = document.createElement("img");
    sevenBoxImage.setAttribute("src", elem.image_url)

    seventhDiv1.append(sevenBoxImage)

    document.querySelector(".seventhBox66").append(seventhDiv1)

})

var eightBox = JSON.parse(localStorage.getItem("eightBoxData"))
eightBox.map(function (elem, index) {
    var eightDiv = document.createElement("div");

    var eightDivImage = document.createElement("img");
    eightDivImage.setAttribute("src", elem.image_url)

    var eightDivName = document.createElement("p");
    eightDivName.innerText =  elem.name;

    eightDiv.append(eightDivImage, eightDivName)

    document.querySelector(".eightBox1").append(eightDiv)

})

var nineBox = JSON.parse(localStorage.getItem("nineBoxData"))
nineBox.map(function (elem, index) {
    var nineDiv = document.createElement("div");

    var nineDivImage = document.createElement("img");
    nineDivImage.setAttribute("src", elem.image_url)

    nineDiv.append(nineDivImage)

    document.querySelector(".nineBox1").append(nineDiv)

})

function indexPageFunc(){
    window.location.href ="index.html"
}
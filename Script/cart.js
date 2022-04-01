var cartArr1 = JSON.parse(localStorage.getItem("cartData"))


var priceOfItems = cartArr1.reduce(function (acc, elem, index, arr) {
    var x =  Math.floor(acc + elem.price);
    return x
}, 0)

console.log(priceOfItems)
var lengthOfPro = cartArr1.length;


document.querySelector("#totalProductPrice").innerText = "₹" + priceOfItems;
document.querySelector("#totalProductPrice1").innerText = "₹" + priceOfItems;
document.querySelector("#noofitems").innerText = `You choose ${lengthOfPro} item(s)`




cartArr1.map(function (elem, index) {
    var mainDiv = document.createElement("div");

    var Div1 = document.createElement("div");
    Div1.setAttribute("class", "cartFlex")

    var image = document.createElement("img")
    image.setAttribute("src", elem.image_url)

    var title = document.createElement("p")
    title.innerText = elem.title;

    var Div2 = document.createElement("div");
    Div2.setAttribute("class", "cart2Flex")

    var price = document.createElement("p")
    price.innerText = "₹" + " " + elem.price;
    // price.setAttribute("class", "pricefunc");

    var noOfItem = document.createElement("p")
    noOfItem.innerText = "1";

    var totalPrice = document.createElement("p")
    totalPrice.innerText = "₹" + " " + elem.price;
    totalPrice.setAttribute("class", "pricefunc");

    var operation = document.createElement("P")
    operation.innerText = "Delete";
    operation.setAttribute("class", "operationbtn")
    operation.addEventListener("click", function(){
        removeFunc(elem, index)
    })

    Div1.append(image, title)
    Div2.append(price, noOfItem, totalPrice, operation)

    mainDiv.append(Div1, Div2)
    document.querySelector(".mainContainer").append(mainDiv)
  
})


var relevantItemsData = JSON.parse(localStorage.getItem("relevantItemsData"))
relevantItemsData.map(function (elem, inex) {

    var relevantDiv = document.createElement("div");

    var relevantImage = document.createElement("img");
    relevantImage.setAttribute("src", elem.fiveBox_img_url)

    var relevantDetails = document.createElement("P");
    relevantDetails.innerText = elem.details1;


    var relevantPrice = document.createElement("P");
    relevantPrice.innerText = "₹" + elem.price;

    relevantDiv.append(relevantImage, relevantDetails, relevantPrice)

    document.querySelector(".recommendationBox").append(relevantDiv)
})


function removeFunc(elem, index){
    cartArr1.splice(index, 1)
localStorage.setItem("cartData", JSON.stringify(cartArr1))
    window.location.reload();
}

function checkoutPage(){
    window.location.href = "checkOutPage.html"
}
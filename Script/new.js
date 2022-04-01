var topSellerProductsData1 = JSON.parse(localStorage.getItem("topSellerProductsData"))
 var cartArr= JSON.parse(localStorage.getItem("cartData")) || [];
 console.log(cartArr)
 displayData(topSellerProductsData1);

 function displayData(topSellerProductsData1){
    document.querySelector(".productBox").innerText = "";
topSellerProductsData1.map(function (elem, index) {

    var mainDiv = document.createElement("div")

    var image = document.createElement("img")
    image.setAttribute("src", elem.image_url)

    var title = document.createElement("p")
    title.innerText = elem.title;

    var price = document.createElement("p")
    price.innerText = "₹" + elem.price;
   

    var StrikedPrice = document.createElement("p")
    StrikedPrice.innerText = "₹" + elem.strikedOffPrice;
    StrikedPrice.style.textDecoration="Line-Through"
    StrikedPrice.style.color= "grey"

    var cartButon = document.createElement("button")
    cartButon.setAttribute("class", "cartButon")
    cartButon.innerText = "Add to Cart";
    cartButon.addEventListener("click", function (){
        cartButtonFunc(elem);
    })

    var innerDiv = document.createElement("div")
    innerDiv.setAttribute("class", "heartDiv")

    var innerheartDiv = document.createElement("div")
    innerheartDiv.setAttribute("class", "heartDiv1")

    var heart = document.createElement("img")
    heart.setAttribute("src", "data:image/png;base64,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")
    heart.setAttribute("class", "heartImage")

    var noOfCount = document.createElement("p")
    noOfCount.innerText = "0";

    innerheartDiv.append(heart,noOfCount )

    var shipping = document.createElement("p")
    shipping.innerText = elem.shipping;

    innerDiv.append(innerheartDiv, shipping)

    mainDiv.append(image, title, price, StrikedPrice, innerDiv, cartButon )
    document.querySelector(".productBox").append(mainDiv)

})
 }
 
var recommdationData = JSON.parse(localStorage.getItem("recommdationData"))
recommdationData.map(function (elem, inex) {

    var recommendationDiv = document.createElement("div");

    var recommendationImage = document.createElement("img");
    recommendationImage.setAttribute("src", elem.fiveBox_img_url)

    var recommendationDetails = document.createElement("P");
    recommendationDetails.innerText = elem.details1;

    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "pricediv")

    var recommendationPrice = document.createElement("P");
    recommendationPrice.innerText = "₹" + elem.price;
    

    var recommendationOffPrice = document.createElement("P");
    recommendationOffPrice.style.color = "grey"

    if (elem.strikedoffPrice === "") {
        recommendationOffPrice.innerText = "";
    } else {
        recommendationOffPrice.innerText = "₹" + elem.strikedoffPrice;
    }
    recommendationOffPrice.style.textDecoration = "Line-Through"

    priceDiv.append(recommendationPrice, recommendationOffPrice)
    recommendationDiv.append(recommendationImage, recommendationDetails, priceDiv)

    document.querySelector(".recommendationBox").append(recommendationDiv)
})


function cartButtonFunc(elem){
    cartArr.push(elem)
    alert("Item added to cart")
    window.location.href ="cart.html"
    localStorage.setItem("cartData", JSON.stringify(cartArr))
    
}

function indexPageFunc(){
       window.location.href ="index.html"
}

document.querySelector("#sortPrice").addEventListener("change", sortPriceFunc)
function sortPriceFunc() {

    var sortPrice = document.querySelector("#sortPrice").value;
   
    if (sortPrice === "htl") {
        topSellerProductsData1.sort(function (a, b) {
            return b.price - a.price
        })
        displayData(topSellerProductsData1); 
           
    }

    if (sortPrice === "lth") {
        topSellerProductsData1.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(topSellerProductsData1); 
    }
}


document.querySelector("#filter").addEventListener("change", sortNameFunc)
function sortNameFunc(){
    var sortName = document.querySelector("#filter").value;
    if(sortName ==="asc"){
        topSellerProductsData1.sort(function (a, b) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
    });
    displayData(topSellerProductsData1); 
    }
    if(sortName ==="desc"){
        topSellerProductsData1.sort(function (a, b) {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
    });
    displayData(topSellerProductsData1); 
 }

}
var cart = document.querySelector(".cart")
var addToCartBtn = document.querySelectorAll(".addToCart")

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", (e)=> {
        let div = e.target.closest("div")
        let divName = div.querySelector("p")
        let divPrice = div.querySelector("h1")
        let quantity = div.querySelector("input")
        let existingItems = cart.querySelectorAll("div")
        
        if (existingItems.length == 0) {
            let newItem = document.createElement("div")
            newItem.classList.add("item")
            let newItemDel = document.createElement("button")
            newItemDel.classList.add("del")
            newItemDel.innerHTML = "Delete"
            newItemDel.addEventListener("click", (e)=> {
                let div = e.target.closest("div")
                div.style.height = "0px"
                div.style.opacity = "0"
                div.style.transition = "0.1s"    
                setTimeout(() => {
                    cart.removeChild(div)
                }, 100);
            })
            let newItemName = document.createElement("p")
            newItemName.classList.add("itemName")
            newItemName.innerHTML = divName.innerHTML
            let newItemPrice = document.createElement("h1")
            newItemPrice.classList.add("priceModal")
            newItemPrice.innerHTML = divPrice.innerHTML * quantity.value
            let newItemQuantity = document.createElement("input")
            newItemQuantity.classList.add("quantity")
            newItemQuantity.value = quantity.value
            cart.appendChild(newItem)
            newItem.appendChild(newItemDel)
            newItem.appendChild(newItemName)
            newItem.appendChild(newItemPrice)
            newItem.appendChild(newItemQuantity)
        } else {
            for (let i = 0; i < existingItems.length; i++) {
                var existingNames = existingItems[i].querySelector("p")

                if(existingNames.innerHTML == divName.innerHTML) {
                    alert("You Have Already Added This Item To Your Cart")
                    return
                }
            }
            let newItem = document.createElement("div")
            newItem.classList.add("item")
            let newItemDel = document.createElement("button")
            newItemDel.classList.add("del")
            newItemDel.innerHTML = "Delete"
            newItemDel.addEventListener("click", (e)=> {
                let div = e.target.closest("div")
                div.style.height = "0px"
                div.style.opacity = "0"
                div.style.transition = "0.1s"    
                setTimeout(() => {
                    cart.removeChild(div)
                }, 100);
            })
            let newItemName = document.createElement("p")
            newItemName.classList.add("itemName")
            newItemName.innerHTML = divName.innerHTML
            let newItemPrice = document.createElement("h1")
            newItemPrice.classList.add("priceModal")
            newItemPrice.innerHTML = divPrice.innerHTML * quantity.value
            let newItemQuantity = document.createElement("input")
            newItemQuantity.classList.add("quantity")
            newItemQuantity.value = quantity.value
            cart.appendChild(newItem)
            newItem.appendChild(newItemDel)
            newItem.appendChild(newItemName)
            newItem.appendChild(newItemPrice)
            newItem.appendChild(newItemQuantity)
        }
        
    })
}

var buy = document.querySelector(".buy")
var arr = []
var displayArr = []
var pricesArr = []
var newPricesArr = []
var lightbox = document.getElementById("lightbox")
var body = document.querySelector("body")

buy.addEventListener("click", ()=> {
    arr = []
    displayArr = []
    pricesArr = []
    newPricesArr = []
    let existingItems = cart.querySelectorAll("div")
    for (let i = 0; i < existingItems.length; i++) {
        let itemNames = existingItems[i].querySelector("p").innerHTML
        let itemQuantities = existingItems[i].querySelector("input").value
        let itemPrices = existingItems[i].querySelector("h1").innerHTML

        let subArr = [itemNames, itemQuantities, itemPrices]
        let displaySubArr = ["NAME: " + itemNames, "QUANTITY: " + itemQuantities, "PRICE: " + itemPrices + "<br>"]
        let pricesSubArr = [itemPrices]
        arr.push(subArr)
        displayArr.push(displaySubArr)
        pricesArr.push(pricesSubArr)
        cart.removeChild(existingItems[i])
    }
    console.table(arr)
    for (let i = 0; i < pricesArr.length; i++) {
        newPricesArr.push(pricesArr[i][0])

    }
    let finalPriceArr =  newPricesArr.map((i) => Number(i))
    console.log(finalPriceArr)
    let finalPrice = finalPriceArr.reduce((a,b) => a+b, 0)

    lightbox.classList.add("active")
    lightbox.addEventListener("click", () => {
        body.removeChild(modal)
        lightbox.classList.add("unactive")
        lightbox.classList.remove("active")
    })
    body.style.overflow = "hidden"
    let modal = document.createElement("div")
    modal.classList.add("modal")
    let p = document.createElement("p")
    p.classList.add("bb")
    p.innerHTML = displayArr
    let price = document.createElement("h1")
    price.classList.add("price")
    price.innerHTML = "$" + finalPrice
    let modalName = document.createElement("input")
    modalName.classList.add("name1")
    modalName.placeholder = "PLEASE ENTER YOUR NAME"
    let modalEmail = document.createElement("input")
    modalEmail.classList.add("email")
    modalEmail.placeholder = "PLEASE ENTER YOUR EMAIL"
    let modalSubm = document.createElement("input")
    modalSubm.classList.add("submit")
    modalSubm.type = "submit"
    modalSubm.addEventListener("click", () => {
        // var userOrder = [modalName.value, modalEmail.value, arr, finalPrice]

        var userOrder = {
            name:modalName.value,
            email:modalEmail.value,
            items:arr,
            price:finalPrice
        }

        console.log(userOrder)
        body.removeChild(modal)
        lightbox.classList.add("unactive")
        lightbox.classList.remove("active")
    })

    body.appendChild(modal)
    modal.appendChild(p)
    modal.appendChild(price)
    modal.appendChild(modalName)
    modal.appendChild(modalEmail)
    modal.appendChild(modalSubm)
})
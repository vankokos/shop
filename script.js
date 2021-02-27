var cart = document.querySelector(".cart")
var addToCartBtn = document.querySelectorAll(".addToCart")

for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", (e)=> {
        let div = e.target.closest("div")
        let divName = div.querySelector("p")
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
            let newItemQuantity = document.createElement("input")
            newItemQuantity.classList.add("quantity")
            newItemQuantity.value = quantity.value
            cart.appendChild(newItem)
            newItem.appendChild(newItemDel)
            newItem.appendChild(newItemName)
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
            let newItemQuantity = document.createElement("input")
            newItemQuantity.classList.add("quantity")
            newItemQuantity.value = quantity.value
            cart.appendChild(newItem)
            newItem.appendChild(newItemDel)
            newItem.appendChild(newItemName)
            newItem.appendChild(newItemQuantity)
        }
        
    })
}

var buy = document.querySelector(".buy")
var arr = []
var displayArr = []
buy.addEventListener("click", ()=> {
    let existingItems = cart.querySelectorAll("div")
    for (let i = 0; i < existingItems.length; i++) {
        let itemNames = existingItems[i].querySelector("p").innerHTML
        let itemQuantities = existingItems[i].querySelector("input").value

        let subArr = [itemNames, itemQuantities]
        let displaySubArr = ["NAME: " + itemNames, "QUANTITY: " + itemQuantities + "\r\n"]
        arr.push(subArr)
        displayArr.push(displaySubArr)
    }
    console.table(arr)
    alert(displayArr)
})
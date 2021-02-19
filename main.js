let carts = document.querySelectorAll('.button');

let products = [
    {
        name: "Item 01",
        tag:"item01",
        price: 10,
        inCart: 0
    },

    {
        name: "Item 02",
        tag:"item02",
        price: 15,
        inCart: 0
    },

    {
        name: "Item 03",
        tag:"item03",
        price: 20,
        inCart: 0
    },

    {
        name: "Item 04",
        tag:"item04",
        price: 25,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', function(){
        console.log("added-cart");
        cartNumbers()
    });
    
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");

    if (productNumbers) {
        document.querySelector("#cart").innerText = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#cart").innerText = productNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#cart").innerText = 1;
    }

}

onLoadCartNumbers()
let addProduct = document.querySelectorAll(".add-product");

// for(i = 0; i < addProduct.length; i++){
//     addProduct[i].addEventListener("click", (event) => {
//         let butt = event.target;
//         let item = butt.parentElement.parentElement;
//         let name = item.querySelectorAll(".item-name");
//         let price = item.querySelectorAll(".item-cost");
//         let image = item.querySelectorAll(".prod");

//         console.log(name[0].innerText, price[0].innerText, image[0].src)

//     })
// }

for(i = 0; i < addProduct.length; i++){
    addProduct[i].addEventListener("click", () => {
        updateCartNumber();
    })
}

function updateCartNumber(){
    let totalItems = localStorage.getItem("cartItems")
    totalItems = parseInt(totalItems)

    if (totalItems){
        localStorage.setItem("cartItems", totalItems+1) ;
        let notis = document.querySelector('.items-count');
        notis.innerText = totalItems;

    }else{
        localStorage.setItem("cartItems", 1) ;
        let notis = document.querySelector('.items-count');
        notis.innerText = 1;
    }
   
   
}

checkCart();
function checkCart(){
    let totalItems = localStorage.getItem("cartItems");
    if (totalItems){
        document.querySelector('.items-count').innerText = totalItems;
    }
}
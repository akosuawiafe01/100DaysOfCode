let addProduct = document.querySelectorAll(".add-product");


function saveProduct(eve){

    let butt = eve.target
    let item = butt.parentElement.parentElement;

    let name = item.querySelectorAll(".item-name")[0].innerText;
    let price = item.querySelectorAll(".item-cost")[0].innerText;


    let itemm = {
        name: `${name}`,
        price: `${price}`
    }

    return itemm;
}


for(i = 0; i < addProduct.length; i++){
    
    addProduct[i].addEventListener("click", (e) => {

        updateCartNumber();
        
        addItemClickedToStorage(saveProduct(e));

    })
 
    
}

function addItemClickedToStorage(items){
    let cart = [];

    let getItems = localStorage.getItem("items") || cart;

    cart.push(items)

    let setItems = localStorage.setItem("items", JSON.stringify(cart));

    

    console.log([...cart, cart])
}


function updateCartNumber(){

    let totalItems = localStorage.getItem("cartItems")
    totalItems = parseInt(totalItems);

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



function checkCart(){
    let totalItems = localStorage.getItem("cartItems");
    if (totalItems){
        document.querySelector('.items-count').innerText = totalItems;
    }
}

checkCart();


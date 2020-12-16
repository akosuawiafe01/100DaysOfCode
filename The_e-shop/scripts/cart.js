let totalItems = localStorage.getItem("cartItems")
totalItems = parseInt(totalItems);
let notis = document.querySelector('.items-count');
notis.innerText = totalItems;

let productList = document.querySelector(".item-list")

// console.log(productList)

let cartItems = JSON.parse(localStorage.getItem("items")); 


let iName = cartItems[0].name;
let iPrice = cartItems[0].price;

productList.innerHTML = `
<div>

  <h2 class="it-names>${iName}</h2>
  <h3 >${iPrice}</h3>
  <input type="number" name="" id="as" placeholder="Quantity">
  
</div>
`
// productList.firstElementChild.classList = "items"
// productList.firstElementChild.firstElementChild.classList = "it-name"
// productList.firstElementChild.firstElementChild.nextElementSibling.classList = "it-price"
// productList.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.classList = "quan"
console.log(productList)
let addProduct = document.querySelectorAll('.add-product');


for (i=0; i<addProduct.length;i++){

    addProduct[i].addEventListener("click", () => {
        console.log(`Item added`);
    })

       }

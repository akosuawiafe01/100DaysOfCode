let addProduct = document.querySelectorAll('.add-product');


for (i=0; i<addProduct.length;i++){

    let itemsNumber = 0;

    addProduct[i].addEventListener("click", () => {
        console.log(`${itemsNumber++} added`)
    })

       }


    let totalItems = localStorage.getItem("cartItems")
    totalItems = parseInt(totalItems)
        let notis = document.querySelector('.items-count');
        notis.innerText = totalItems;

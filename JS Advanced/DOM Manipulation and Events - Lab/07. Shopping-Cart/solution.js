function solve() {
    let textAreaElement = document.querySelector('textarea');
    let checkOutElement = document.querySelector('.checkout');
    let shoppingCartElement = document.querySelector('.shopping-cart');
    let productsRegister = { products: [], totalPrice: 0 };

    const addButtonClick = (e) => {

        if (e.target.tagName === 'BUTTON' && e.target.className === 'add-product') {
            let productInfo = e.target.parentNode.parentNode;
            let productPrice = productInfo.querySelector('.product-line-price').textContent;
            let productName = productInfo.querySelector('div > .product-title').textContent;

            textAreaElement.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;

            if (!productsRegister.products.includes(productName)) {
                productsRegister.products.push(productName);
            }
            productsRegister.totalPrice += Number(productPrice);
        }
    }

    checkOutElement.addEventListener('click', f = (e) => {
        textAreaElement.textContent += `You bought ${productsRegister.products.join(', ')} for ${productsRegister.totalPrice.toFixed(2)}.`;
        
        shoppingCartElement.removeEventListener('click', addButtonClick);
        checkOutElement.removeEventListener('click', f);
    });
    shoppingCartElement.addEventListener('click', addButtonClick);
}
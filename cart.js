// Function to get the cart from local storage
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Function to save the cart to local storage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add an item to the cart
function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    alert('Product added to cart!');
}

// Function to get product details
function getProductDetails(button) {
    const productDiv = button.closest('.box');
    const price = productDiv.querySelector('big').innerText.trim();
    const originalPrice = productDiv.querySelector('del').innerText.trim();
    const deal = productDiv.querySelector('b').innerText.trim();
    const imageSrc = productDiv.querySelector('img').src;

    return {
        price,
        originalPrice,
        deal,
        imageSrc
    };
}

// Attach event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('input[value="Add to cart"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = getProductDetails(button);
            addToCart(product);
        });
    });
});

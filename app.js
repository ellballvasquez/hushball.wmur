const productsContainer = document.querySelector('.products');
const cartItemsContainer = document.querySelector('.cart-items');
const cartContainer = document.querySelector('.cart-container');
const cartOverlay = document.querySelector('.cart-overlay');
let cart = [];

const products = [
    {
        name: 'Orange Hush Ball',
        price: 9.99,
        image: 'product1.png'
    },
    {
        name: 'Green Hush Ball',
        price: 9.99,
        image: 'product2.jpg.png'
    },
    {
        name: 'Blue Hush Ball',
        price: 9.99,
        image: 'product3.jpg.png'
    },
    {
        name: 'Yellow Hush Ball',
        price: 9.99,
        image: 'product4.jpg.png'
    },
    {
        name: 'Whole Pack-!',
        price: 29.55,
        image: 'whole1.png'
    },
];

// Display products
function displayProducts() {
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;

        productsContainer.appendChild(productDiv);
    });
}

// Add product to cart
function addToCart(index) {
    cart.push(products[index]);
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
        totalPrice += item.price;
    });
    cartContainer.querySelector('button').textContent = `Checkout - Total: $${totalPrice.toFixed(2)}`;
}

// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Toggle cart visibility
function toggleCart() {
    cartContainer.classList.toggle('show');
    cartOverlay.classList.toggle('show');
}

// Checkout function
function checkout() {
    // Redirect to payment page
    window.location.href = "pay.html";
}

displayProducts();

function goBack() {
    window.history.back();
}

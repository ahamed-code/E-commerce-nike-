
    document.addEventListener('DOMContentLoaded', function () {
        const cart = [];
        const cartCountElem = document.getElementById('cart-count');
        const cartItemsElem = document.getElementById('cart-items');
        const cartTotalElem = document.getElementById('cart-total');
        const successMessageElem = document.getElementById('success-message');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.dataset.product;
                const price = parseFloat(this.dataset.price);

                 
                const existingItem = cart.find(item => item.product === product);
                if (existingItem) {
                    existingItem.quantity += 1; 
                } else {
                    cart.push({ product, price, quantity: 1 });  
                }

                updateCart();
                showSuccessMessage();
            });
        });

        function updateCart() {
            cartCountElem.textContent = getTotalQuantity();
            cartItemsElem.innerHTML = '';

            let total = 0;
            cart.forEach(item => {
                total += item.price * item.quantity;
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                listItem.textContent = `${item.product} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
                cartItemsElem.appendChild(listItem);
            });

            cartTotalElem.textContent = total.toFixed(2);
        }

        function getTotalQuantity() {
            return cart.reduce((total, item) => total + item.quantity, 0);
        }

        function showSuccessMessage() {
            successMessageElem.style.display = 'block';
            setTimeout(() => {
                successMessageElem.style.display = 'none';
            }, 2000);
        }

         
        const shopNowButton = document.getElementById('shop-now-btn');
        shopNowButton.addEventListener('click', function (event) {
            event.preventDefault();
            const productsSection = document.getElementById('products-section');
            scrollToElement(productsSection);
        });
 
        const searchForm = document.querySelector('.form-inline');
        const searchInput = document.getElementById('search-input');
        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            searchProducts(query);
        });

        function searchProducts(query) {
            const productsSection = document.getElementById('products-section');
            const productCards = productsSection.querySelectorAll('.card');
            let found = false;

            productCards.forEach(card => {
                card.classList.remove('searched-card');
                const productName = card.querySelector('.card-title').textContent.toLowerCase();
                if (productName.includes(query)) {
                    card.style.display = 'block';
                    card.classList.add('searched-card');
                    if (!found) {
                        scrollToElement(card); // Scroll to the found card
                        found = true;
                    }
                } else {
                    card.style.display = 'none';
                }
            });

             
            if (found) {
                scrollToElement(productsSection);
            }
        }
 
        function scrollToElement(element) {
            window.scrollTo({
                top: element.offsetTop - 100,  
                behavior: 'smooth'
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        const cart = [];
        const cartCountElem = document.getElementById('cart-count');
        const cartItemsElem = document.getElementById('cart-items');
        const cartTotalElem = document.getElementById('cart-total');
        const successMessageElem = document.getElementById('success-message');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const buyNowButtons = document.querySelectorAll('.buy-now');
    
        function updateCart() {
            cartCountElem.textContent = cart.length;
            cartItemsElem.innerHTML = '';
            let total = 0;
    
            cart.forEach(item => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
                cartItemsElem.appendChild(li);
                total += item.price;
            });
    
            cartTotalElem.textContent = total.toFixed(2);
        }
    
        function addToCart(product, price) {
            cart.push({ product, price });
            updateCart();
            successMessageElem.style.display = 'block';
            setTimeout(() => {
                successMessageElem.style.display = 'none';
            }, 2000);
        }
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.dataset.product;
                const price = parseFloat(this.dataset.price);
                addToCart(product, price);
            });
        });
    
        buyNowButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.dataset.product;
                const price = parseFloat(this.dataset.price);
                const image = this.dataset.image;
                addToCart(product, price);
                openOrderConfirmationTab(product, image);
            });
        });
    
        document.getElementById('checkout-btn').addEventListener('click', function () {
             
            alert('Proceeding to checkout!');
        });
    
        function openOrderConfirmationTab(product, image) {
            const loaderHTML = `
                <html>
                    <head>
                        <title>Placing Order</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                padding: 50px;
                            }
                            .loader {
                                border: 16px solid #f3f3f3;
                                border-radius: 50%;
                                border-top: 16px solid #3498db;
                                width: 120px;
                                height: 120px;
                                animation: spin 2s linear infinite;
                                margin: 100px auto;
                            }
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="loader"></div>
                        <p>Placing your order...</p>
                    </body>
                </html>
            `;
            const newWindow = window.open();
            newWindow.document.write(loaderHTML);
            newWindow.document.close();
    
            setTimeout(() => {
                const orderConfirmationHTML = `
                    <html>
                        <head>
                            <title>Order Confirmation</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    text-align: center;
                                    padding: 50px;
                                }
                                img {
                                    max-width: 100%;
                                    height: auto;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Your order has been placed</h1>
                            <p>It will arrive within 5 days. Thank you for purchasing.</p>
                            <img src="${image}" alt="${product}">
                        </body>
                    </html>
                `;
                newWindow.document.open();
                newWindow.document.write(orderConfirmationHTML);
                newWindow.document.close();
            }, 4000);  
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        const cart = [];
        const cartCountElem = document.getElementById('cart-count');
        const cartItemsElem = document.getElementById('cart-items');
        const cartTotalElem = document.getElementById('cart-total');
        const successMessageElem = document.getElementById('success-message');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const buyNowButtons = document.querySelectorAll('.buy-now');
    
        function updateCart() {
            cartCountElem.textContent = cart.length;
            cartItemsElem.innerHTML = '';
            let total = 0;
    
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `
                    ${item.product} - $${item.price.toFixed(2)}
                    <button class="btn btn-danger btn-sm float-right remove-from-cart" data-index="${index}">&times;</button>
                `;
                cartItemsElem.appendChild(li);
                total += item.price;
            });
    
            cartTotalElem.textContent = total.toFixed(2);
    
            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', function () {
                    const index = parseInt(this.dataset.index);
                    removeFromCart(index);
                });
            });
        }
    
        function addToCart(product, price) {
            cart.push({ product, price });
            updateCart();
            successMessageElem.style.display = 'block';
            setTimeout(() => {
                successMessageElem.style.display = 'none';
            }, 2000);
        }
    
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.dataset.product;
                const price = parseFloat(this.dataset.price);
                addToCart(product, price);
            });
        });
    
        buyNowButtons.forEach(button => {
            button.addEventListener('click', function () {
                const product = this.dataset.product;
                const price = parseFloat(this.dataset.price);
                const image = this.dataset.image;
                addToCart(product, price);
                openOrderConfirmationTab(product, image);
            });
        });
    
        document.getElementById('checkout-btn').addEventListener('click', function () {
             
            alert('Proceeding to checkout!');
        });
    
        function openOrderConfirmationTab(product, image) {
            const loaderHTML = `
                <html>
                    <head>
                        <title>Placing Order</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                padding: 50px;
                            }
                            .loader {
                                border: 16px solid #f3f3f3;
                                border-radius: 50%;
                                border-top: 16px solid #3498db;
                                width: 120px;
                                height: 120px;
                                animation: spin 2s linear infinite;
                                margin: 100px auto;
                            }
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        </style>
                    </head>
                    <body>
                        <div class="loader"></div>
                        <p>Placing your order...</p>
                    </body>
                </html>
            `;
            const newWindow = window.open();
            newWindow.document.write(loaderHTML);
            newWindow.document.close();
    
            setTimeout(() => {
                const orderConfirmationHTML = `
                    <html>
                        <head>
                            <title>Order Confirmation</title>
                            <style>
                                body {
                                    font-family: Arial, sans-serif;
                                    text-align: center;
                                    padding: 50px;
                                }
                                img {
                                    max-width: 100%;
                                    height: auto;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Your order has been placed</h1>
                            <p>It will arrive within 5 days. Thank you for purchasing.</p>
                            <img src="${image}" alt="${product}">
                        </body>
                    </html>
                `;
                newWindow.document.open();
                newWindow.document.write(orderConfirmationHTML);
                newWindow.document.close();
            }, 4000);  
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        const cartItems = document.getElementById('cart-items');
    
        let currentProduct = null;
    
        const updateCartUI = () => {
            const itemCount = parseInt(cartCount.textContent, 10);
            const hasItems = itemCount > 0;
    
            checkoutBtn.disabled = !hasItems;
            cartItems.classList.toggle('d-none', !hasItems);
        };
    
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const product = event.target.getAttribute('data-product');
                const price = parseFloat(event.target.getAttribute('data-price'));
                const image = event.target.getAttribute('data-image');
    
                const currentCount = parseInt(cartCount.textContent, 10);
                cartCount.textContent = currentCount + 1;
                
                const currentTotal = parseFloat(cartTotal.textContent);
                cartTotal.textContent = (currentTotal + price).toFixed(2);
    
                currentProduct = {
                    name: product,
                    price: price,
                    image: image
                };
    
                updateCartUI();
            });
        });
    
        checkoutBtn.addEventListener('click', () => {
            if (currentProduct) {
                // Open a new tab or window without the prompt
                const orderWindow = window.open('', '_blank', 'width=400,height=300');
                orderWindow.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Order Confirmation</title>
                        <style>
                            body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }
                            img { max-width: 100%; height: auto; }
                        </style>
                    </head>
                    <body>
                        <h1>Order Confirmation</h1>
                        <p>Your order has been placed. It will arrive within 5 days. Thank you for purchasing.</p>
                        <img src="${currentProduct.image}" alt="${currentProduct.name}">
                    </body>
                    </html>
                `);
                orderWindow.document.close();
            }
        });
    
        updateCartUI();
    });
    
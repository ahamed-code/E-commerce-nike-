function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    
    if (email === "hitmanbasheer@gmail.com" && password === "20044002") {
        return true; 
    } else {
        errorMessage.innerText = "Invalid credentials. Please enter correct email and password.";
        return false;  
    }
}
  document.addEventListener('DOMContentLoaded', function() {
     let products = JSON.parse(localStorage.getItem('products')) || [];

     const productsContainer = document.querySelector('.container .row');
     products.forEach(product => {
         const productHtml = `
             <div class="col-md-3 mb-4">
                 <div class="card">
                     <img src="${product.image}" class="card-img-top" alt="${product.name}">
                     <div class="card-body text-center">
                         <h5 class="card-title">${product.name}</h5>
                         <p class="card-text">$${product.price}</p>
                         <button class="btn btn-primary">Add to Cart</button>
                     </div>
                 </div>
             </div>
         `;
         productsContainer.insertAdjacentHTML('beforeend', productHtml);
     });
 });
        document.getElementById('add-product-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;
            const productImage = document.getElementById('productImage').value;

            const productId = new Date().getTime();

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            displayProduct(product);

            document.getElementById('add-product-form').reset();
        });

        function displayProduct(product) {
            const newProductHtml = `
                <div class="col-md-3 mb-4" id="product-${product.id}">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="Product Image">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price}</p>
                            <button class="btn btn-warning" onclick="editProduct(${product.id})">Edit</button>
                            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `;
            document.querySelector('#existing-products .row').insertAdjacentHTML('beforeend', newProductHtml);
        }

        function loadProducts() {
            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.forEach(product => {
                displayProduct(product);
            });
        }

        function deleteProduct(productId) {
            let products = JSON.parse(localStorage.getItem('products')) || [];
            products = products.filter(product => product.id !== productId);
            localStorage.setItem('products', JSON.stringify(products));
            document.getElementById('product-' + productId).remove();
        }

        window.onload = loadProducts;
    
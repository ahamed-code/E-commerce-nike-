document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  document.getElementById('add-product-form').addEventListener('submit', addProduct);
  document.getElementById('edit-product-form').addEventListener('submit', updateProduct);
});

function loadProducts() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const productContainer = document.querySelector('#existing-products .row');
  productContainer.innerHTML = '';

  products.forEach(product => {
    const productHTML = `
      <div class="col-md-3 mb-4" id="product-${product.id}">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-warning" onclick="editProduct(${product.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
          </div>
        </div>
      </div>
    `;
    productContainer.insertAdjacentHTML('beforeend', productHTML);
  });
}

function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;

  const products = JSON.parse(localStorage.getItem('products')) || [];
  const id = products.length ? products[products.length - 1].id + 1 : 1;

  products.push({ id, name, price, image });
  localStorage.setItem('products', JSON.stringify(products));

  loadProducts();
  document.getElementById('add-product-form').reset();
}

function editProduct(id) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products.find(p => p.id === id);

  document.getElementById('editProductId').value = product.id;
  document.getElementById('editProductName').value = product.name;
  document.getElementById('editProductPrice').value = product.price;
  document.getElementById('editProductImage').value = product.image;

  $('#editProductModal').modal('show');
}

function updateProduct(event) {
  event.preventDefault();

  const id = parseInt(document.getElementById('editProductId').value);
  const name = document.getElementById('editProductName').value;
  const price = document.getElementById('editProductPrice').value;
  const image = document.getElementById('editProductImage').value;

  const products = JSON.parse(localStorage.getItem('products')) || [];
  const index = products.findIndex(p => p.id === id);

  if (index > -1) {
    products[index] = { id, name, price, image };
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
    $('#editProductModal').modal('hide');
  }
}

function deleteProduct(id) {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const updated = products.filter(p => p.id !== id);

  localStorage.setItem('products', JSON.stringify(updated));
  loadProducts();
}

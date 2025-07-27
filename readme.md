### README

### Overview

This project is a basic e-commerce webpage featuring HTML, CSS, and JavaScript. The HTML structure provides the layout, the CSS styles it, and the JavaScript manages dynamic interactions such as adding items to the cart, updating the cart, and displaying order confirmation messages. The project demonstrates a simple shopping cart functionality and a basic search feature for products.

This project includes a product management system, enabling the admin to perform CRUD (Create, Read, Update, Delete) operations on the products. The admin can manage products through a dedicated interface with functionalities for adding, editing, and deleting products.
### Files
- `adlog.html`: Contains the HTML structure of the administrator login webpage.
- `ecom.html`: Contains the HTML structure of the e-commerce webpage.
- `edit.html`: Contains the HTML structure for the admin product management page.
- `ecomcss.css`: Holds the CSS styles for the e-commerce webpage.
- `eweb.css`: Holds the CSS styles for the product management webpage.
- `web.css`: Holds the CSS styles for the admin login webpage.
- `ecom.js`: Includes the JavaScript code that handles cart operations and search functionality.
- `edit.js`: Includes the JavaScript code for handling CRUD operations in the admin product management page.
- `script.js`: Includes the JavaScript code for handling CRUD operations in the admin login page.


### Features

1. **Add to Cart**:
   - Users can add products to the cart by clicking the "Add to Cart" buttons.
   - The cart dynamically updates with the total number of items and the total price.

2. **Buy Now**:
   - Users can click the "Buy Now" button to immediately place an order.
   - An order confirmation message is displayed in a new tab.

3. **Cart Management**:
   - The cart displays the list of items with quantities and prices.
   - Users can remove items from the cart.

4. **Search Functionality**:
   - Users can search for products using the search bar.
   - The search results highlight matching products and scroll to them.

5. **Admin Product Management**:
   - Admins can add, edit, and delete products.
   - Admins can view existing products and perform CRUD operations.

### How to Use

1. **Add to Cart**:
   - Click on the "Add to Cart" button below any product. The cart count and total price will update.

2. **Buy Now**:
   - Click the "Buy Now" button to open a new tab with an order confirmation message.

3. **View Cart**:
   - The cart section displays the current items, total quantity, and total price.

4. **Search Products**:
   - Use the search bar to find products. Type in the product name and press enter to see the results.

5. **Admin Product Management**:
   - Admins can log in to the product management page to add, edit, or delete products.
   - Use the forms to add new products or update existing ones.

### Setup

1. Clone the repository to your local machine or download the zip files.
2. Open `ecom.html` in a web browser to view the e-commerce page.
3. Open `product_management.html` in a web browser to manage products.
4. Make sure `ecom.js`, `edit.js`, and `style.css` are in the same directory as `ecom.html` and `product_management.html` for proper functionality.

### Dependencies

- Bootstrap 4.5.2: Used for styling and layout.

### JavaScript Details

#### Adding Items to the Cart

- Event listeners are added to "Add to Cart" buttons.
- When a product is added, it updates the cart array and recalculates the total quantity and price.
- Success messages are displayed temporarily when items are added.

#### Removing Items from the Cart

- The cart allows removal of individual items.
- Event listeners are added to remove buttons to handle the removal process.

#### Buy Now Functionality

- Clicking "Buy Now" adds the product to the cart and opens a new tab with an order confirmation message.
- A loading spinner is displayed briefly before the confirmation message.

#### Search Functionality

- The search form listens for submit events and filters products based on the search query.
- Matching products are highlighted and scrolled into view.

#### Smooth Scrolling

- The `scrollToElement` function ensures smooth scrolling to the relevant sections or products.

#### Admin Product Management

- The admin page allows CRUD operations on products.`edit.html`
- The `edit.js` script handles the functionality for adding, editing, and deleting products.

### CSS Styling

- The CSS file (`style.css`) includes styles for the layout, product cards, cart section, and buttons.
- Specific classes are used to hide/show elements and style the success messages and cart items.

### Conclusion

This project provides a foundation for building an e-commerce website with basic cart functionality, search capability, and dynamic content management. It can be further enhanced with features like user authentication, payment integration, and more sophisticated product management.
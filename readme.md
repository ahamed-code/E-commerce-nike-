# 🛒 Nike E-Commerce Platform

A basic yet functional e-commerce website built with **HTML, CSS, and JavaScript**, allowing users to view and buy Nike products, and admins to manage the product listings.

> 🏢 This project was developed as part of an internship at **Cloulogic Company, Pondicherry**.

---

## 📁 Project Structure

├── html/
│ ├── ecom.html # User-facing e-commerce page
│ └── admin.html # Admin dashboard to manage products
├── js/
│ └── exist.js # Shared JS file for both admin and ecom pages
├── css/
│ └── styles.css # Styling for pages

yaml
Copy
Edit

---

## 👟 Features

### ✅ `ecom.html` (User Side)

- 🏠 Navigation: Home, About, Contact (static sections)
- 🛍️ View all available Nike products dynamically
- ➕ Add to cart
- 💳 Buy option (alert-based confirmation)
- 🗑️ Clear cart button
- 💾 Uses `localStorage` to persist cart and product data

### 🛠️ `admin.html` (Admin Panel)

- ➕ Add new products (name, image URL, price, category)
- 🗂️ View all added products in a list
- 🗑️ Delete specific products
- 🧹 Clear All Products button to wipe everything
- 🔄 All products are saved using `localStorage` and shared with `ecom.html`

---

## 🧠 How It Works

- The `exist.js` file handles all product logic (CRUD operations on products using `localStorage`)
- Admin adds products via `admin.html`, which are then visible on `ecom.html`
- Both pages use the same JS logic to maintain synchronization

---

## 🚀 Getting Started

1. Clone this repo:
   ```bash
   git clone https://github.com/ahamed-code/E-commerce-nike-.git
Open the project folder.

Open html/admin.html to add products.

Open html/ecom.html to view and shop the products.

💡 Future Improvements
Backend integration (Node.js + MongoDB or Firebase)

User login & checkout system

Real payment gateway integration

🧑‍💻 Author
Basheer Ahamed
GitHub

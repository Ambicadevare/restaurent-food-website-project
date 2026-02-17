const menuData = [
    { name: "Chicken Biryani", price: 250 },
    { name: "Mutton Biryani", price: 320 },
    { name: "Ice Cream", price: 120 }
];

let cart = [];

// Load menu
function loadMenu(items) {
    const menu = document.getElementById("menu-items");
    menu.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-card";
        div.innerHTML = `
      <h3>${item.name}</h3>
      <span>₹${item.price}</span>
      <button onclick="addToCart('${item.name}', ${item.price})">
        Add to Cart
      </button>
    `;
        menu.appendChild(div);
    });
}

loadMenu(menuData);

// Cart logic
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = "Total: ₹" + total;
}

// Search
function searchMenu() {
    const value = document.getElementById("search").value.toLowerCase();
    const filtered = menuData.filter(item =>
        item.name.toLowerCase().includes(value)
    );
    loadMenu(filtered);
}

// Theme toggle (simple)
function toggleTheme() {
    document.body.classList.toggle("dark");
}

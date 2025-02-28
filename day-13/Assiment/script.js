const products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://rukminim2.flixcart.com/image/750/900/xif0q/headphone/u/0/w/wireless-bluetooth-headphones-m-original-imah2bfzxkfqzwj5.jpeg?q=20&crop=false"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://keychron.in/wp-content/uploads/2023/01/Keychron-V3-Custom-Mechanical-Keyboard-knob-carbon-black-QMK-VIA-tenkeyless-hot-swappable-Keychron-K-Pro-switch-blue-V3-D2_540x.jpg"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01190add819e47c8a092653b9fd29bac_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://www.wildhorn.in/cdn/shop/products/915NPMLKRDL._SL1500.jpg?v=1703661630&width=1946"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://cdn.cinemacenter.in/image/cache/catalog/images/0021038_sony-zv-1-digital-camera_500-500x500.jpeg.webp"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://m.media-amazon.com/images/I/71qpXciYP1L.jpg"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://m.media-amazon.com/images/I/51wwVl2r-WL._AC_UY1100_.jpg"
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/bottle/j/x/0/2000-bottle-gallon-with-time-marker-large-capacity-2000ml-1-original-imagpyhdrd2qzwhf.jpeg?q=90&crop=false"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_1200x1200_crop_center.png?v=1709717404"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://www.jiomart.com/images/product/original/491373220/prestige-1-5-litres-1500-watts-electric-kettle-pkoss-digital-o491373220-p491373220-0-202010110045.jpeg?im=Resize=(1000,1000)"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://mobilla.in/cdn/shop/files/white_725_1st_images.webp?v=1735369854"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://www.wiproconsumerlighting.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0648%2F5478%2F6148%2Ffiles%2FImage_4_100b36c6-6d80-490f-92bf-08f9108dcff9.jpg%3Fv%3D1722581599&w=1200&q=75"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/61qIEvCy6+L.jpg"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://m.media-amazon.com/images/I/81g3pyGvYkL.jpg"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://m.media-amazon.com/images/I/71b5fW+s18L.jpg"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/e/v/5/1-watches-axe-style-men-original-imagrtccnbxfty6e.jpeg?q=90&crop=false"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://honeywellconnection.com/in/wp-content/uploads/2024/08/main-image-4.jpg"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://veirdo.in/cdn/shop/files/b_0119493a-9927-4550-8323-baefe5f625c0.jpg?v=1724147309"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});

function searchProducts() {
    displayProducts();  // Calls displayProducts to apply the search filter
}


function displayProducts() {
    const productList = document.getElementById("product-list");
    if (!productList) {
        console.error("Error: #product-list element not found.");
        return;
    }
    productList.innerHTML = "";
    const category = document.getElementById("filter-category").value;
    const searchQuery = document.getElementById("search-input")?.value.toLowerCase() || "";
    const sort = document.getElementById("sort-price").value;
    let filteredProducts = products.filter(product => 
        (category === "all" || product.category === category) &&
        product.name.toLowerCase().includes(searchQuery)
    );

    if (sort === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    filteredProducts.forEach(product => {  // Fix: use filteredProducts
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML += `<div class="product">
            <img src="${product.image}" alt="${product.name}" width="200px">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
        productList.appendChild(productCard);
    });
}

displayProducts()

function filterProducts() {
    displayProducts();  // Simply call `displayProducts()` which already handles filtering
}

document.addEventListener("DOMContentLoaded", updateCart);

function updateCart() {
    const cartTable = document.querySelector("#cart-table tbody");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    const totalAmount = document.getElementById("total-amount");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartTable.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
    } else {
        emptyCartMessage.style.display = "none";
    }
    cart.forEach((item, index) => {
        item.quantity = item.quantity || 1; 
        total += item.price * item.quantity;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${item.name}" width="100px"></td>
            <td>$${item.price}</td>
            <td>
                <button onclick="changeQuantity(${index}, -1)">-</button>
                ${item.quantity}
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </td>
            <td><button class="remove-btn" onclick="removeFromCart(${index})">🗑 Remove</button></td>
        `;
        cartTable.appendChild(row);
    });
    totalAmount.textContent = total.toFixed(2);
}


function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        const product = products.find(p => p.id === productId);
        cart.push({ ...product, quantity: 1 }); // Ensure quantity starts at 1
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
    updateCart();
}


function addToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function purchase() {
    localStorage.removeItem("cart");
    alert("Thank you for your purchase!");
    updateCart();
}

function goToProducts() {
    window.location.href = "index.html";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function goToCart() {
    window.location.href = "cart.html";
}

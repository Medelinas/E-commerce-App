const products = [
    { id: 1, name: "baking flour 25kg", price: 40000, 
Image: "assets/flour.png"  },
    { id: 2, name: "sugar 25kg", price: 58000, 
Image: "assets/sugar.png" },
    { id: 3, name: "10 soaps", price: 5000, 
Image: "assets/soaps.png" },
    { id: 4, name: "cakes", price: 25000, 
Image: "assets/cakes.png"  },
    { id: 5, name: "Accessories", price: 2500, 
Image: "assets/accessories.png"  },
    { id: 6, name: "Watch", price: 25000, 
Image: "assets/watch.png"},
];

const productList = document.getElementById("product-list");

// Display products
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="Tsh.${product.image}" alt="Tsh.${product.name}" style="width:100px;" />
        <h3>${product.name}</h3>
        <p>Price: Tsh. ${product.price}</p>
        <button onClick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});


let cart = [];
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
}

    renderCart()

    function renderCart() {
        const cartItems = document.getElementById("cart-items");
        const cartTotal = document.getElementById("cart-total");
    
        cartItems.innerHTML = "";
        let total = 0;
    
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price} × ${item.quantity}</p>
                <button onClick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `Total: $${total}`;
    }
    
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }
    
    document.getElementById("checkout").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        
        alert("Thank you for your purchase!");
        cart = [];
        renderCart();
    });
    
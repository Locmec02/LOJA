let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.name + ' - R$' + item.price;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function checkout() {
    if(cart.length === 0){
        alert('Seu carrinho está vazio!');
        return;
    }
    let pix = "14125287988"; // seu Pix
    alert("Para concluir a compra, faça o pagamento via Pix: " + pix + "\nTotal: R$" + total);
}

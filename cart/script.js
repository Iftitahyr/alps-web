// Handle quantity changes
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const isIncrement = this.textContent === '+';
        const quantitySpan = this.parentElement.querySelector('span');
        let quantity = parseInt(quantitySpan.textContent);
        
        if (isIncrement) {
            quantity++;
        } else if (quantity > 1) {
            quantity--;
        }
        
        quantitySpan.textContent = quantity;
        updateTotals();
    });
});

// Handle remove buttons
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cart-item').remove();
        updateTotals();
    });
});

// Update totals
function updateTotals() {
    let grandTotal = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.product-details + div').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity-controls span').textContent);
        const total = price * quantity;
        item.querySelector('.quantity-controls + div').textContent = $${total.toFixed(2)};
        grandTotal += total;
    });
    document.querySelector('.grand-total div:last-child').textContent = $${grandTotal.toFixed(2)};
}

// Handle form submission
document.querySelector('.place-order-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Add your order processing logic here
    alert('Order placed successfully!');
});
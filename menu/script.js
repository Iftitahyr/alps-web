// Product sorting
document.querySelector('.sort-select').addEventListener('change', function(e) {
    // Add sorting logic here
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product-card');
        const productName = product.querySelector('.product-title').textContent;
        alert(${productName} added to cart!);
    });
});

// Pagination
document.querySelectorAll('.pagination button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.pagination button.active').classList.remove('active');
        this.classList.add('active');
        // Add page switching logic here
    });
});

// Category filtering
document.querySelectorAll('.category-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Add category filtering logic here
    });
});

// Search functionality
document.querySelector('.search-box input').addEventListener('input', function(e) {
    // Add search filtering logic here
});
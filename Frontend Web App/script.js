// Sample data simulating API response
const products = [
    { id: 1, name: "Product 1", company: "Company A", category: "Electronics", price: 199.99, rating: 4.5, discount: 10, available: true },
    { id: 2, name: "Product 2", company: "Company B", category: "Books", price: 29.99, rating: 4.7, discount: 15, available: false },
    { id: 3, name: "Product 3", company: "Company C", category: "Fashion", price: 49.99, rating: 4.0, discount: 5, available: true },
    // Add more products as needed
  ];
  
  // DOM Elements
  const productList = document.getElementById('product-list');
  const productDetailSection = document.getElementById('product-detail');
  const productDetailContent = document.getElementById('product-detail-content');
  const backButton = document.getElementById('back-button');
  
  // Function to display all products
  function displayAllProducts() {
    productList.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Company:</strong> ${product.company}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <button onclick="viewProductDetail(${product.id})">View Details</button>
      `;
      productList.appendChild(productCard);
    });
  }
  
  // Function to view product detail
  function viewProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (product) {
      productDetailContent.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Company:</strong> ${product.company}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> ${product.rating} / 5</p>
        <p><strong>Discount:</strong> ${product.discount}%</p>
        <p><strong>Availability:</strong> ${product.available ? 'In Stock' : 'Out of Stock'}</p>
      `;
      productList.parentElement.classList.add('hidden');
      productDetailSection.classList.remove('hidden');
    }
  }
  
  // Function to go back to all products
  backButton.addEventListener('click', () => {
    productDetailSection.classList.add('hidden');
    productList.parentElement.classList.remove('hidden');
  });
  
  // Initialize the app
  displayAllProducts();
  
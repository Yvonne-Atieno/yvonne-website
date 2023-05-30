/ https://dummyjson.com/products
function generateProductCards(data) {
  const productContainer = document.getElementById("product-container");
  // iterate through the data and create a card for each product
  data.forEach((product) => {
    // create a card element
    const card = document.createElement("div");
    card.classList.add("product-card");
    // Set the card content using the product data
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" />
            <h2>${product.title}</h2>
            <div class='productPrice'>
            <p>${product.price}</p>
            <button>ADD TO CART</button>
            </div>
        `;
    // append the card to the product container
    productContainer.appendChild(card);
  });
}
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      // Get the first 8 products from the data
      const returnedData = data.products.slice(0, 8);
      // call the function to generate cards
      generateProductCards(returnedData);
    });
}

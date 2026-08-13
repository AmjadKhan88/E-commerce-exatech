// all products
async function getAllProducts() {
  const res = await fetch(`https://fakestoreapi.com/products/`);
  const products = await res.json();
  return products;
}

function renderCards(products) {
  const container = document.querySelector(".all-product-section");
  container.innerHTML = products.map(p => `
    <a  href="detail.html?id=${p.id}"  >
    <div class="product-image" >
    <img style="height: 200px; max-width:200px" src="${p.image}" alt="${p.title}"/>
    </div>
    <div class="product-text-card">
        <p style="font-weight: 600; font-size: 20px;">${p.title.slice(0, 30)}..</p>
        <p style="font-weight: 400; font-size: 20px;">${p.category}</p>
        <p style="font-weight: 800; font-size: 20px;">$ ${p.price.toFixed(2)}</p>
    </div>
    </a>
  `).join("");
}

getAllProducts().then(renderCards);


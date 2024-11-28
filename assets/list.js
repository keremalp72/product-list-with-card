const products = [
  {
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    images: "assets/images/waffle-mb.png",
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
    images: "assets/images/vanilla-mb.png",
  },
  {
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 6.5,
    images: "assets/images/macaron-mb.png",
  },

  {
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    images: "assets/images/tiramisu-mb.png",
  },
  {
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    images: "assets/images/baklava-mb.png",
  },
  {
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    images: "assets/images/lemon-mb.png",
  },
  {
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    images: "assets/images/cake-mb.png",
  },
  {
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 5.5,
    images: "assets/images/brownie-mb.png",
  },
  {
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    images: "assets/images/cotta-mb.png",
  },
];
const foods = document.querySelector(".foods");
const cart = document.querySelector(".your-cart-container");
const orders = [];
products.forEach((product, index) => {
  deserts.innerHTML += `
          <div class="item">
            <img src="${product.images}"></img>
            <button class="btns" data-index="${index}"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
            <h3>${product.category}</h3>
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
          </div>
  `;
});
const btns = document.querySelectorAll(".btns");
for (const btn of btns) {
  btn.addEventListener("click", addToCart);
}

function addToCart() {
  console.log(this.dataset.index);
  const eklenmesiistenenurun = products[this.dataset.index];
  const sepettevarmi = orders.find((o) => o.name == eklenmesiistenenurun.name);
  if (sepettevarmi) {
    sepettevarmi.quantity++;
    foods.innerHTML += ` <ul>
  <li>
      <h2>${eklenmesiistenenurun.name}</h2>
      <h3>${sepettevarmi.quantity}x <span>@ $${eklenmesiistenenurun.price} </span><span> $${sepettevarmi.quantity * eklenmesiistenenurun.price}</span></h3>
     <button>x</button>
  </li>
</ul>`;
  } else {
    orders.push({
      name: eklenmesiistenenurun.name,
      category: eklenmesiistenenurun.category,
      price: eklenmesiistenenurun.price,
      images: eklenmesiistenenurun.images,
      quantity: 1,
    });
    
  }
  
  cart.innerHTML = ` <h1>Your Cart <span>(${sepettevarmi.quantity})</span></h1>`
  cart.innerHTML += foods.innerHTML
  console.log(sepettevarmi);
  console.log(orders);
}

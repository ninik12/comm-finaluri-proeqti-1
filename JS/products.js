async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const container = document.querySelector(".product-list");
  container.innerHTML = "";

  products.forEach(item => {
    const card = `
      <div class="product-card">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>ფასი: $${item.price}</p>
        <a href="details.html?id=${item.id}" class="btn">დეტალურად</a>
        <p>⭐ ${item.rating.rate} (${item.rating.count} reviews)</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

loadProducts();

// ბურგერის მენიუს ფუნქციონალიlet navigation = document.getElementById("nav_bar");
let navigation = document.getElementById("nav_bar");
let burger = document.getElementById("burger_bar");

burger.addEventListener('click', function(){
    navigation.classList.toggle('activeNav');
    burger.classList.toggle('burgerActive');

})

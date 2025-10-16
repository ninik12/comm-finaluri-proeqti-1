
async function loadPopularProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  // პროდუქტები რეიტინგის მიხედვით (კლებადობით)
  const sorted = products.sort((a, b) => b.rating.rate - a.rating.rate);

  // საუკეთესო 4
  const popular = sorted.slice(0, 4);

  // გამოვიტანოთ საიტზე
  const container = document.querySelector(".product-list");
  container.innerHTML = "";
  popular.forEach(item => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
         <a href="details.html?id=${item.id}" class="btn">დეტალურად</a>
        <p>⭐ ${item.rating.rate} (${item.rating.count} reviews)</p>
      </div>
    `;
  });
}

loadPopularProducts();

// ბურგერის მენიუს ფუნქციონალიlet navigation = document.getElementById("nav_bar");
let navigation = document.getElementById("nav_bar");
let burger = document.getElementById("burger_bar");

burger.addEventListener('click', function(){
    navigation.classList.toggle('activeNav');
    burger.classList.toggle('burgerActive');

})


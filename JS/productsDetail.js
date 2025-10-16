async function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  document.querySelector(".product-title").textContent = product.title;
  document.querySelector(".product-image").src = product.image;
  document.querySelector(".product-desc").textContent = product.description;
  document.querySelector(".product-price").textContent = `ფასი: $${product.price}`;
  document.querySelector(".product-rate").textContent = `⭐ ${product.rating.rate} (${product.rating.count} reviews)`;
}

loadProductDetails();


// ბურგერის მენიუს ფუნქციონალიlet navigation = document.getElementById("nav_bar");
let navigation = document.getElementById("nav_bar");
let burger = document.getElementById("burger_bar");

burger.addEventListener('click', function(){
    navigation.classList.toggle('activeNav');
    burger.classList.toggle('burgerActive');

})
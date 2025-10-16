// ბურგერის მენიუს ფუნქციონალიlet navigation = document.getElementById("nav_bar");
let navigation = document.getElementById("nav_bar");
let burger = document.getElementById("burger_bar");

burger.addEventListener('click', function(){
    navigation.classList.toggle('activeNav');
    burger.classList.toggle('burgerActive');

})
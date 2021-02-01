var menu = document.querySelector("nav");
var burger = document.querySelector("div.burger");
var burgerContenu = document.querySelector("div.burger-contenu");
var fermerBurger = document.querySelector("i.fas")

document.addEventListener("scroll", function () {
    if (pageYOffset > 0) {
        menu.classList.add("scroll");
    } else {
        menu.classList.remove("scroll");
    }
})

burger.addEventListener("click", function () {
    burgerContenu.classList.toggle("contenu-burger");
})

fermerBurger.addEventListener("click", function () {
    burger.classList.remove("contenu-burger");
})




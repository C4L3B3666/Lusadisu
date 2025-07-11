var menuHamburguer = document.querySelector("#nav_menu_hamburguer")

menuHamburguer.addEventListener("click", ()=> {
    var menu = document.querySelector("header");
    menu.classList.toggle("mostrar_menu_lateral")

})
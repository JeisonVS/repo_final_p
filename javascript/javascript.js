/**
 * Created by jjvasquez on 15/11/2017.
 */
var botonBurger = document.querySelector("div.menu_collapse a");
var navbar = document.querySelector(".nav-bar");
console.log(navbar);


function mostrarNav() {

    if (navbar.className==="nav-bar") {
        navbar.className += " responsive";
        console.log(navbar);
    }else{
        navbar.className = "nav-bar";
    }
}

/*botonBurger.addEventListener("click", mostrarNav);*/


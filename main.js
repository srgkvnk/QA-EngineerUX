const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu-btn");

function openMenu () {
    menuBtn.addEventListener('click', function(){
        mobileMenu.classList.add("show-menu");
        closeMenu();
    });
}

function closeMenu () {
    closeMenuBtn.addEventListener('click', function(){
        mobileMenu.classList.remove("show-menu");
        openMenu();
    });
}

openMenu();
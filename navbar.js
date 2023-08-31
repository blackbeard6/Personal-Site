const hamburger = document.querySelector(".hamburger");
const navItem = document.querySelectorAll(".nav-item")
const navName = document.querySelector(".col-20-40")
const navPages = document.querySelector(".nav-10-20-hidden")
hamburger.addEventListener("click", mobileMenu);
navItem.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navName.classList.toggle("active")
    // navItem.forEach(n => n.toggle("active"));
    // Get all elements with the class name "nav-item" and "nav-10-20-hidden"
    var navItems = document.getElementsByClassName("nav-item");
    var navLabels = document.getElementsByClassName("nav-10-20-hidden");
    

    // Loop through each element and toggle the "active" class
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle("active");
    }

    // Loop through each element and toggle the "active" class
    for (var i = 0; i < navLabels.length; i++) {
        navLabels[i].classList.toggle("active");
    }
}

function closeMenu() {
    hamburger.classList.remove("active");
}
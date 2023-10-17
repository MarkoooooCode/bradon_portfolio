const menuIcon = document.getElementById("menu-icon");
const navbarList = document.getElementById("navbar-list");

menuIcon.addEventListener("click", () => {
    navbarList.classList.toggle("active");
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});
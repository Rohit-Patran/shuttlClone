let nav_burger = document.querySelector('.nav-burger');
let nav_links = document.querySelector('.nav-links');

nav_burger.addEventListener('click',()=>{
    nav_links.classList.toggle('active');
});
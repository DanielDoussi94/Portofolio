const toggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu');

toggle.addEventListener('click', (e)=>{
    toggle.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})
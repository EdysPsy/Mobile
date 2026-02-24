// script para alternar menu em dispositivos móveis

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
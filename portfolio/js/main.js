const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const backBtn = document.querySelector('.back-btn');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');
const currPage = document.querySelector('.current')

//Inital state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
currPage.addEventListener('click', closeMenu);


function toggleMenu() {
    if(!showMenu) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    menuBtn.classList.add('close');
    backBtn.classList.add('show');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));
    showMenu = true;
}

function closeMenu() {
    menuBtn.classList.remove('close');
    backBtn.classList.remove('show');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));
    showMenu = false;  
}
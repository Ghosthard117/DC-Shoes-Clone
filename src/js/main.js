'use strict';
const body = document.body;
const mid = document.querySelector('.header__mid');
const midTop = mid.getBoundingClientRect().top;

window.addEventListener('scroll',() => {
    let pixel = window.scrollY;
    if (pixel >= midTop) {
        body.classList.add('fixed');
    }
    else {
        body.classList.remove('fixed');
    }
});

const button = document.querySelector('.footer__button');
const sup = document.querySelector('.footer__sup');
button.addEventListener('click',() => {
    sup.classList.toggle('active');
    button.classList.toggle('active');
});

const dl = document.querySelectorAll('.submenu__dl');
const dt = document.querySelectorAll('.submenu__dt');
dt.forEach((x, i) => {
    dt[i].addEventListener('click', () => {
        dl[i].classList.toggle('active');
    });
});

'use strict';



window.addEventListener('scroll', () => {
    const header = document.querySelector('header').classList;
    header.toggle('sticky', window.scrollY > 0);

    document.querySelector('.prog-bar').classList.toggle('addColor', window.scrollY > 0);
});

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener('click', () => {
        menuBtn.classList.remove('active');
    navigation.classList.remove('active');
    });
});


const scroll_button = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', () => {
    scroll_button.classList.toggle('active', window.scrollY > 500);
});

scroll_button.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', appear)

function appear() {
    var appearing = document.querySelectorAll('.appear');

    for(let i=0; i<appearing.length; i++) {
        var windowHeight = window.innerHeight;
        var appearTop = appearing[i].getBoundingClientRect().top;
        var appearPoint = 50;

        if(appearTop < (windowHeight - appearPoint)) {
            appearing[i].classList.add('active');
        }
    }



    // scroll progressive bar

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress-bar').style.width = `${scrolled}%`;

}




//// footerrrrrr
const footerP = document.querySelector('.footer-p');

var thisYear = new Date().getFullYear();

footerP.innerHTML = `&copy; All rights reserved ${thisYear}`;

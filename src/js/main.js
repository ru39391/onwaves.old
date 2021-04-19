import '../scss/main.scss';

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/modal';
import './libs/jquery.countdown';
import './page/countdown';
import './page/forms';
import '../img/favicon.ico';
import '../img/content/courses/1.jpg';
import '../img/content/courses/2.jpg';
import '../img/content/courses/3.jpg';

/* menu */
document.querySelector('.header__toggler_menu').addEventListener('click', () => {
    document.querySelector('.nav').classList.add('active');
});

document.querySelector('.nav__close').addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('active');
});

document.querySelectorAll('.page-anchor').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if(document.querySelector('.nav').classList.contains('active')) {
            document.querySelector('.nav').classList.remove('active');
        }
    });
});

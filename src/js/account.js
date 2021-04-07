import '../scss/account.scss';

import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/modal';
import './libs/jquery.countdown';
import './page/countdown';
import './page/forms';

/* page */
const leftmenuTogglers = document.querySelectorAll('.leftmenu__toggler');
leftmenuTogglers.forEach(leftmenuToggler => {
  leftmenuToggler.addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.closest('.leftmenu__item').classList.toggle('active');
  });
});

if(document.querySelector('.sidebar__toggler')) {
  document.querySelector('.sidebar__toggler').addEventListener('click', (e) =>{
    e.preventDefault();
    e.target.closest('.sidebar').classList.toggle('active');
  });
}

if(document.querySelector('.show-tooltip') && document.querySelector('.tooltip__close')) {
  document.querySelector('.show-tooltip').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.tooltip').classList.add('active');
  });
  
  document.querySelector('.tooltip__close').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('.tooltip').classList.remove('active');
  });
}

/* form */
import classie from 'desandro-classie';

const onInputFocus = (e) => {
  classie.add(e.target, 'active');
}

const onInputBlur = (e) => {
  if(e.target.value.trim() === '') {
    classie.remove(e.target, 'active');
  }
};

[].slice.call(document.querySelectorAll('.form__field')).forEach((input) => {
  if(input.value.trim() !== '') {
    classie.add(input, 'active');
  }

  input.addEventListener('focus', onInputFocus);
  input.addEventListener('blur', onInputBlur);
});
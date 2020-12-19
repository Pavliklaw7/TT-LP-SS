'use strict';

const burger = document.querySelector('#burger');
const navigation = document.querySelector('.nav');
const link = document.querySelector('.nav__link');
// const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navigation.classList.toggle('active');
  // body.style.overflow = 'hidden';
});

link.addEventListener('click', () => {
  navigation.classList.remove('active');
  // body.style.overflow = 'visible';
});

const headerH = document.querySelector('.header');

console.log(headerH.offsetHeight);

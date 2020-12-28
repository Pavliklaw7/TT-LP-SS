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

/* slider */

function showSliderContent() {
  for (let i = 1; i <= 4; i++) {
    const radioBtn = document.getElementById(`slider-btn-${i}`);
    const content = document.getElementById(`slider-content-${i}`);

    if (radioBtn.checked) {
      content.style.display = 'flex';
    } else {
      content.style.display = 'none';
    }
    radioBtn.addEventListener('click', showSliderContent);
  }
}

showSliderContent();

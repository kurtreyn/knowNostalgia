'use strict';
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelectorAll('.close-button');
let currentBtn = '';
let resultBtn;
let currentCont = '';
let thisLocation = '';

const setup = function () {
  if (resultBtn) {
    currentBtn = this.getAttribute('data-fact');
    resultBtn = '';
  } else {
    currentBtn += this.getAttribute('data-fact');
  }

  for (let i = 0; i < containers.length; i++) {
    currentCont = containers[i].getAttribute('id');
    if (currentCont === currentBtn) {
      containers[i].classList.remove('hide-item');
      containers[i].classList.add('fade-in');
    } else {
      containers[i].classList.add('hide-item');
    }
    const hideContainer = function () {
      containers[i].classList.add('hide-item');
    };
    for (const cb of closeBtn) {
      cb.addEventListener('click', hideContainer);
    }
  }

  currentBtn = '';
  currentCont = '';
};

for (const btn of factBtns) {
  btn.addEventListener('click', setup);
}

'use strict';
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelector('.closeBtn');
let currentBtn = '';
let resultBtn;
let currentCont = '';

//************************ NEW CODE START

//************************ NEW CODE END

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
    } else {
      containers[i].classList.add('hide-item');
    }
  }
  currentBtn = '';
  currentCont = '';
  // const hide = function () {
  //   containers[i].classList.add('hide-item');
  //   console.log('click');
  // };
  // closeBtn.onclick = hide;
};

// for (const x of containers) {
//   closeBtn.addEventListener('click, hide');
// }

for (const btn of factBtns) {
  btn.addEventListener('click', setup);
}

//************************ NEW CODE START

//************************ NEW CODE END

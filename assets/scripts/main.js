'use strict';

//INDEX SCRIPT
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelectorAll('.close-button');
let currentBtn = '';
let currentCont = '';
let thisLocation = '';
let para = document.createElement('p');
let attrib = '';

const facts = {
  semiCharmed: `This song describes a drug user's descent into crystal meth
  addiction.`,
  napster: `Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998`,
  woodstock99: `During the final hours of the "Woodstock 99," a peace promotion organization handed out candles to the audience to create a candlelight vigil for the final hours of the festival. The audience used the candles to set fire to an audio tower and start bonfires.`,
  goldeneye: `Most of the non-player characters were rendered from employees at Rare Studios.`,
  that70sShow: `The show was initially going to be named after The Who song “Teenage Wasteland.”`,
  darkKnight: `For the role of the Joker, Heath Ledger drew inspiration from: Johnny Rotten & Sid Vicious of the Sex Pistols, as well as the character Alex from Stanley Kubrick’s film, A Clockwork Orange. `,
};

const setup = function () {
  currentBtn = this.getAttribute('data-fact');
  console.log(this);

  for (let i = 0; i < containers.length; i++) {
    currentCont = containers[i].getAttribute('id');
    console.log(`current cont is ${currentCont}`);

    if (currentCont === currentBtn) {
      attrib = currentCont;
      console.log(`attrib is ${attrib}`);
      if (attrib === 'semi-charmed') {
        console.log(`attrib is now: ${attrib}`);
        para.innerText = facts.semiCharmed;
        containers[i].appendChild(para);
      } else if (attrib === 'dark-knight') {
        para.innerText = facts.that70sShow;
        containers[i].appendChild(para);
      } else if (attrib === 'that-70s-show') {
        para.innerText = facts.that70sShow;
        containers[i].appendChild(para);
      } else if (attrib === 'goldeneye') {
        para.innerText = facts.goldeneye;
        containers[i].appendChild(para);
      } else if (attrib === 'woodstock99') {
        para.innerText = facts.woodstock99;
        containers[i].appendChild(para);
      } else if (attrib === 'napster') {
        para.innerText = facts.napster;
        containers[i].appendChild(para);
      }
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

//MOVIE-PAGE SCRIPT *************************
const movieFactCont = document.querySelectorAll('[data-movie-container]');
const movFctBtns = document.querySelectorAll('[data-movie-fact-button]');
let curMFB = '';
let curMovCont = '';

const testClick = function () {
  console.log(`test click`);
};

const movSetup = function () {
  curMFB = this.getAttribute('data-movie-fact-button');
  console.log(`current button is ${curMFB}`);

  for (let m = 0; m < movieFactCont.length; m++) {
    // console.log(movieFactCont[m]);
    curMovCont = movieFactCont[m].getAttribute('data-movie-container');
    // console.log(`current container is ${curMovCont}`);

    if (curMovCont === curMFB) {
      console.log(`it's a match`);
      console.log(movieFactCont[m]);
      movieFactCont[m].style.right = '-10px';
    }
  }
};

for (const mfb of movFctBtns) {
  mfb.addEventListener('click', movSetup);
}

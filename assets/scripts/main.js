'use strict';
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelectorAll('.close-button');
let currentBtn = '';
let resultBtn;
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
  if (resultBtn) {
    currentBtn = this.getAttribute('data-fact');
    resultBtn = '';
  } else {
    currentBtn += this.getAttribute('data-fact');
  }

  for (let i = 0; i < containers.length; i++) {
    currentCont = containers[i].getAttribute('id');

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

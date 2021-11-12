'use strict';
//good from here...
const displayBtns = document.querySelectorAll('[data-fact]');

const closeBtn = document.querySelector('.close-button');

const factContainer = document.querySelector('.fact-container');

let factInfo = document.querySelector('.fact-info');

let attrib = '';

const facts = {
  semiCharmed: `This song describes a drug user's descent into crystal meth addiction.`,
  napster: `Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998`,
  woodstock99: `During the final hours of the "Woodstock 99," a peace promotion organization handed out candles to the audience to create a candlelight vigil for the final hours of the festival. The audience used the candles to set fire to an audio tower and start bonfires.`,
  goldeneye: `Most of the non-player characters were rendered from employees at Rare Studios.`,
  that70sShow: `The show was initially going to be named after The Who song “Teenage Wasteland.”`,
  darkKnight: `For the role of the Joker, Heath Ledger drew inspiration from: Johnny Rotten & Sid Vicious of the Sex Pistols, as well as the character Alex from Stanley Kubrick’s film, A Clockwork Orange. `,
};
//...to here

const showFact = function () {
  factContainer.classList.remove('hide-item');
  attrib = this.getAttribute('data-fact');
  if (attrib === 'napster') {
    factInfo.innerText = facts.napster;
  } else if (attrib === 'semi-charmed') {
    factInfo.innerText = facts.semiCharmed;
  } else if (attrib === 'woodstock99') {
    factInfo.innerText = facts.woodstock99;
  } else if (attrib === 'dark-knight') {
    factInfo.innerText = facts.darkKnight;
  } else if (attrib === 'that-70s-show') {
    factInfo.innerText = facts.that70sShow;
  } else if (attrib === 'goldeneye') {
    factInfo.innerText = facts.goldeneye;
  } else {
    factInfo = '';
  }
};

//good from here...
for (const btn of displayBtns) {
  btn.onclick = showFact;
}

function hideFact() {
  factContainer.classList.add('hide-item');
}

closeBtn.addEventListener('click', hideFact);
//...to here

/* THIS CODE WORKS (except for close button)
********************************************
'use strict';
const factBtns = document.querySelectorAll('[data-fact]');
const containers = document.querySelectorAll('.fact-container');
const closeBtn = document.querySelectorAll('.closeBtn');
let currentBtn = '';
let resultBtn;
let currentCont = '';

const setup = function () {
  if (resultBtn) {
    currentBtn = this.getAttribute('data-fact');
    resultBtn = '';
  } else {
    currentBtn += this.getAttribute('data-fact');
  }

  for (let i = 0; i < containers.length; i++) {
    currentCont = containers[i].getAttribute('id');
    console.log(currentCont);
    if (currentCont === currentBtn) {
      containers[i].classList.remove('hide-item');
    } else {
      containers[i].classList.add('hide-item');
    }
  }
  currentBtn = '';
  const hide = function () {
    containers[i].classList.add('hide-item');
  };
  closeBtn.onclick = hide;
};

for (const btn of factBtns) {
  btn.addEventListener('click', setup);
}

********************************************
*/

/*
'use strict';
//good from here...
const factBtns = document.querySelectorAll('[data-fact]');

const closeBtn = document.querySelector('.close-button');

const factContainer = document.querySelectorAll('.fact-container');

let factInfo = document.querySelectorAll('.fact-info');

let attrib = '';

const facts = {
  semiCharmed: `This song describes a drug user's descent into crystal meth addiction.`,
  napster: `Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998`,
  woodstock99: `During the final hours of the "Woodstock 99," a peace promotion organization handed out candles to the audience to create a candlelight vigil for the final hours of the festival. The audience used the candles to set fire to an audio tower and start bonfires.`,
  goldeneye: `Most of the non-player characters were rendered from employees at Rare Studios.`,
  that70sShow: `The show was initially going to be named after The Who song “Teenage Wasteland.”`,
  darkKnight: `For the role of the Joker, Heath Ledger drew inspiration from: Johnny Rotten & Sid Vicious of the Sex Pistols, as well as the character Alex from Stanley Kubrick’s film, A Clockwork Orange. `,
};
//...to here

// for (const [key, value] of Object.entries(facts)) {
//   if (key === 'goldeneye') {
//     factInfo.innerText = value;
//   }
//   console.log(factInfo);
// }

for (const btn of factBtns) {
  attrib = btn.getAttribute('data-fact');
  console.log(attrib);
}

for (let i = 0; i < factContainer.length; i++) {
  const showFact = function () {
    attrib = this.getAttribute('data-fact');

    if (attrib === 'napster') {
      factInfo.innerText = facts.napster;
    } else if (attrib === 'semi-charmed') {
      factInfo.innerText = facts.semiCharmed;
    } else if (attrib === 'woodstock99') {
      factInfo.innerText = facts.woodstock99;
    } else if (attrib === 'dark-knight') {
      factInfo.innerText = facts.darkKnight;
    } else if (attrib === 'that-70s-show') {
      factInfo.innerText = facts.that70sShow;
    } else if (attrib === 'goldeneye') {
      factInfo.innerText = facts.goldeneye;
    } else {
      factInfo = '';
    }
    factContainer[i].classList.remove('hide-item');
  };
}

// const showFacts = function () {
//   factContainer.classList.remove('hide-item');
// };

//good from here...
for (const btn of factBtns) {
  btn.onclick = showFact;
}

function hideFact() {
  factContainer.classList.add('hide-item');
}

closeBtn.addEventListener('click', hideFact);
//...to here


*/

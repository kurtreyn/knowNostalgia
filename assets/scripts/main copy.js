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
  } else {
    factInfo.innerText = '';
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

let factText = document.createElement('P');
factText.innerText = 'fact text';
document.getElementById('woodstock99').appendChild(factText);

'use strict';
//good
const musicBtns = document.querySelectorAll('[data-music]');
//good
const closeBtn = document.querySelector('.close-button');
//good
const factContainer = document.querySelector('.fact-container');
//good
let factInfo = document.querySelector('.fact-info');

let musicAttrib = '';

//good
const musicFacts = {
  semiCharmed:
    "This song describes a drug user's descent into crystal meth addiction.",
  napster:
    'Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998',
};

const showFact = function () {
  factContainer.classList.remove('hide-item');
  musicAttrib = this.getAttribute('data-music');
  if (musicAttrib === 'napster') {
    factInfo.innerText = musicFacts.napster;
  } else if (musicAttrib === 'semi-charmed') {
    factInfo.innerText = musicFacts.semiCharmed;
  }
};

for (const btn of musicBtns) {
  btn.onclick = showFact;
}

//good
function hideFact() {
  factContainer.classList.add('hide-item');
}
//good
closeBtn.addEventListener('click', hideFact);

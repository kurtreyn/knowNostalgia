"use strict";const factBtns=document.querySelectorAll("[data-fact]"),containers=document.querySelectorAll(".fact-container"),closeBtn=document.querySelectorAll(".close-button");let currentBtn="",currentCont="",thisLocation="",para=document.createElement("p"),attrib="";const facts={semiCharmed:"This song describes a drug user's descent into crystal meth\n  addiction.",napster:"Shawn Fanning, the creator of Napster, got the idea while he was enrolled at Northeastern University in 1998",woodstock99:'During the final hours of the "Woodstock 99," a peace promotion organization handed out candles to the audience to create a candlelight vigil for the final hours of the festival. The audience used the candles to set fire to an audio tower and start bonfires.',goldeneye:"Most of the non-player characters were rendered from employees at Rare Studios.",that70sShow:"The show was initially going to be named after The Who song “Teenage Wasteland.”",darkKnight:"For the role of the Joker, Heath Ledger drew inspiration from: Johnny Rotten & Sid Vicious of the Sex Pistols, as well as the character Alex from Stanley Kubrick’s film, A Clockwork Orange. ",anchorman:"The film was inspired by a biography show that Will Ferrell watched about Jessica Savitch, and how one of her male co-workers confessed to being a total chauvinist back in the day.",cloverfield:"During the first weekend of the release, many theaters posted signs warning guests that the hand-held camera movements may cause motion sickness.",donnieDarko:"This was Seth Rogen’s feature film debut.",godOfWar:"David Jaffe's inspiration for the game was partly inspired by the 1981 film Clash of the Titans.",halfLife:"Half-Life was the highest-selling first-person shooter of all time up until the release of Call of Duty: Modern Warfare 3 (2011) - that's a total of 13 years.",mario64:"Was voted as the most important video game ever by Electronic Gaming Magazine (Jan 2005).",southPark:"Most of Cartman's lines are ad-libbed by Trey Parker, who has stated that Cartman is his favorite character on the show.",sopranos:'James Gandolfini said that he was often contacted by real-life "wise guys", complimenting him on the authenticity of the series, as well as giving him advice.',dexter:"Though they play brother and sister in the series, having met on the show, Michael C. Hall  and Jennifer Carpenter married on 31st December 2008. They subsequently divorced in December 2010, but continued to work together in the show.",hammer:"The music is based on  “Super Freak” by Rick James. That song was a hit in 1981, so many younger listeners did not know the beat was sampled.",teenSpirit:'Kurt Cobain wrote this song for Nirvana; it came together in a jam session when he played it for the band. He said: "I was trying to write the ultimate pop song. I was basically trying to rip off The Pixies."',bittersweetSymphony:"The famous orchestral riff incorporates a sample from an obscure instrumental version of the 1965 Rolling Stones song ”The Last Time” by Stones producer Andrew Loog Oldham, who included it on a 1966 album called The Rolling Stones Songbook (credited to The Andrew Oldham Orchestra)."},setup=function(){currentBtn=this.getAttribute("data-fact"),console.log(this);for(let e=0;e<containers.length;e++){currentCont=containers[e].getAttribute("id"),console.log(`current cont is ${currentCont}`),currentCont===currentBtn?(attrib=currentCont,console.log(`attrib is ${attrib}`),"semi-charmed"===attrib?(console.log(`attrib is now: ${attrib}`),para.innerText=facts.semiCharmed,containers[e].appendChild(para)):"dark-knight"===attrib||"that-70s-show"===attrib?(para.innerText=facts.that70sShow,containers[e].appendChild(para)):"goldeneye"===attrib?(para.innerText=facts.goldeneye,containers[e].appendChild(para)):"woodstock99"===attrib?(para.innerText=facts.woodstock99,containers[e].appendChild(para)):"napster"===attrib&&(para.innerText=facts.napster,containers[e].appendChild(para)),containers[e].classList.remove("hide-item"),containers[e].classList.add("fade-in")):containers[e].classList.add("hide-item");const t=function(){containers[e].classList.add("hide-item")};for(const e of closeBtn)e.addEventListener("click",t)}currentBtn="",currentCont=""};for(const e of factBtns)e.addEventListener("click",setup);const factCont=document.querySelectorAll("[data-container]"),factPageBtns=document.querySelectorAll("[data-fact-button]");let curFB="",curCont="";const testClick=function(){console.log("test click")},pageSetup=function(){curFB=this.getAttribute("data-fact-button"),console.log(`current button is ${curFB}`);for(let e=0;e<factCont.length;e++){curCont=factCont[e].getAttribute("data-container");let t=factCont[e].innerText,a=factPageBtns[e].innerText;if(curCont===curFB){function n(){factCont[e].innerText="",factPageBtns[e].innerText="close",factCont[e].appendChild(para)}console.log(`current container is: ${curCont}`),console.log("it's a match");const r=function(){para.innerText="",factCont[e].innerText=t,factPageBtns[e].innerText=a,curFB="",curCont="",console.log(`curFB is now ${curFB} curCont is now ${curCont}`)};switch(curCont){case"anchorman":para.innerText=facts.anchorman,n();break;case"cloverfield":para.innerText=facts.cloverfield,n();break;case"donnie-darko":console.log(`current cont is now ${curCont}`),para.innerText=facts.donnieDarko,n();break;case"bittersweet":para.innerText=facts.bittersweetSymphony,n();break;case"spirit":para.innerText=facts.teenSpirit,n();break;case"hammer":para.innerText=facts.hammer,n();break;case"south-park":para.innerText=facts.southPark,n();break;case"sopranos":para.innerText=facts.sopranos,n();break;case"dexter":para.innerText=facts.dexter,n();break;case"god-of-war":para.innerText=facts.godOfWar,n();break;case"half-life":para.innerText=facts.halfLife,n();break;case"mario":para.innerText=facts.mario64,n()}for(const e of factPageBtns)"close"===e.innerText?e.addEventListener("click",r):curCont=curFB}}};for(const e of factPageBtns)console.log(`fb is ${e}`),e.addEventListener("click",pageSetup);
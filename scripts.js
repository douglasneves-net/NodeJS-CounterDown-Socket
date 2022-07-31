let progressStartValue = 0;
let progressEndValue = 10;
let speed = 1000;


const currentTime = () => {

  const html = document.querySelector("span");

  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  let timeFormat = `${hh}:${mm}:${ss}`;

  html.innerText = timeFormat;

};

currentTime();

function timerLoad(){

  currentTime();

  progressStartValue++;

  let circularProgress = document.querySelector(".circular-progress");

  console.log(circularProgress.style)

  circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg);`

  if(progressStartValue == progressEndValue){
    clearInterval(timer);
  }

}

let timer = setInterval(timerLoad, 1000);





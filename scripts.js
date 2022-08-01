class CounterDown{

  constructor(){
    this.v_html = document.querySelector('#timer');
    this.v_child = document.createElement('span');
    this.v_showTimer = '';
    this.progressStartValue = 0;
    this.progressEndValue = 10;
    this.speed = 1000;
    this.time = '';
    this.init();
  }


  injectHTMLTimer(){
    this.v_child.setAttribute('id', 'showTimer');
    this.v_html.appendChild(this.v_child);
    this.v_showTimer = document.querySelector('#showTimer');
  }


  showTimer(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;
    let timeFormat = `${hh}:${mm}:${ss}`;
    this.v_showTimer.innerText = timeFormat;
  };


  timerLoad(){
    this.progressStartValue++;
    this.showTimer();
    this.v_html.style.background = `conic-gradient(#7d2ae8 ${ this.progressStartValue  * 3.6}deg, #ededed 0deg)`
    console.log(this.progressStartValue);
    if(this.progressStartValue == this.progressEndValue){
      clearInterval(this.time);
    }
  }


  init(){
    this.injectHTMLTimer();
    this.showTimer();
    this.time = setInterval(() => this.timerLoad() , 1000);
  }


}


let timer = new CounterDown();
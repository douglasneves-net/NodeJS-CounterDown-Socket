class CounterDown{

  constructor($timer = 60){
    this.v_html = document.querySelector('#timer');
    this.v_child = document.createElement('span');
    this.v_child.setAttribute('id', 'showTimer');
    this.v_html.appendChild(this.v_child);
    this.v_showTimer = document.querySelector('#showTimer');;
    this.progressStartValue = 1;
    this.progressEndValue = $timer;
    this.speed = 1000;
    this.time = '';
    this.init();
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
    this.v_html.style.background = `conic-gradient(#7d2ae8 ${ this.progressStartValue  * 3.6}deg, #ededed 0deg)`
    if(this.progressStartValue == this.progressEndValue){
      clearInterval(this.time);
    }
    this.showTimer();
  }


  init(){
    this.showTimer();
    this.time = setInterval(() => this.timerLoad() , this.speed);
  }


}


let timer = new CounterDown('120');